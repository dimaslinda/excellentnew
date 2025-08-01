<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;
use GuzzleHttp\Promise\Utils;

class HomeController extends Controller
{
    /**
     * Display the home page with articles from WordPress API.
     */
    public function index(): Response
    {
        try {
            // Ambil artikel terbaru untuk responselates
            $responselates = $this->fetchPostsAsync(1);

            // Ambil artikel untuk responselimit, skip artikel yang sudah ada di responselates
            $responselimit = $this->fetchPostsAsync(5); // Ambil 5 artikel

            // Filter responselimit untuk menghindari duplikasi dengan responselates
            $latestIds = array_column($responselates, 'id');
            $responselimit = array_filter($responselimit, function ($article) use ($latestIds) {
                return !in_array($article['id'], $latestIds);
            });

            // Ambil hanya 4 artikel untuk responselimit
            $responselimit = array_slice($responselimit, 0, 4);

            return Inertia::render('index', [
                'responselates' => $responselates,
                'responselimit' => $responselimit,
            ]);
        } catch (\Exception $e) {
            Log::error('Failed to fetch WordPress articles: ' . $e->getMessage());

            return Inertia::render('index', [
                'responselates' => [],
                'responselimit' => [],
            ]);
        }
    }

    private function fetchPostsAsync($limit)
    {
        try {
            $client = new Client();
            $apiUrl = "https://excellentteam.id/artikel/wp-json/wp/v2/posts";

            $promises = [
                'posts' => $client->getAsync($apiUrl, [
                    'verify' => false,
                    'auth' => ['dimasbon', 'dongorasta'],
                    'timeout' => 30,
                    'query' => [
                        '_embed' => true,
                        'per_page' => $limit * 2, // Get more than needed to ensure we have enough
                    ]
                ])
            ];

            $results = Utils::settle($promises)->wait();

            if (!isset($results['posts']['value']) || $results['posts']['state'] !== 'fulfilled') {
                Log::warning('Failed to fetch posts from WordPress API');
                return [];
            }

            $posts = json_decode($results['posts']['value']->getBody(), true);
            if (!is_array($posts)) {
                Log::warning('Invalid response format from WordPress API');
                return [];
            }

            $processedPosts = $this->processArticles($posts);
            return array_slice($processedPosts, 0, $limit);
        } catch (RequestException $e) {
            Log::error('WordPress API request failed: ' . $e->getMessage());
            return [];
        } catch (\Exception $e) {
            Log::error('Unexpected error fetching posts: ' . $e->getMessage());
            return [];
        }
    }

    /**
     * Process articles data to match the expected format.
     */
    private function processArticles(array $articles): array
    {
        return array_map(function ($article) {
            // Get featured media URL
            $featuredMediaUrl = '';
            if (isset($article['_embedded']['wp:featuredmedia'][0]['source_url'])) {
                $featuredMediaUrl = $article['_embedded']['wp:featuredmedia'][0]['source_url'];
            } elseif (isset($article['featured_media_src_url'])) {
                $featuredMediaUrl = $article['featured_media_src_url'];
            }

            // Process Yoast SEO data if available
            $yoastDescription = '';
            if (isset($article['yoast_head_json']['description'])) {
                $yoastDescription = $article['yoast_head_json']['description'];
            } else {
                // Fallback to excerpt if Yoast description is not available
                $yoastDescription = strip_tags($article['excerpt']['rendered'] ?? '');
            }

            return [
                'id' => $article['id'],
                'date' => $article['date'],
                'link' => $article['link'],
                'title' => [
                    'rendered' => $article['title']['rendered']
                ],
                'excerpt' => [
                    'rendered' => $article['excerpt']['rendered']
                ],
                'featured_media_src_url' => $featuredMediaUrl,
                'yoast_head_json' => [
                    'description' => $yoastDescription
                ]
            ];
        }, $articles);
    }
}
