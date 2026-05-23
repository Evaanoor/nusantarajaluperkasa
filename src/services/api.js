// Base API configuration
const BASE_URL = 'http://localhost:8000'
const API_VERSION = '/api/v1'

// Untuk development, gunakan mock data dari /draft/api-contract/
const MOCK_BASE = '/draft/api-contract'

// Set false untuk menggunakan real API, true untuk mock data
const IS_MOCK = true

/**
 * Generic fetch wrapper
 */
async function request(endpoint, options = {}) {
  // Fallback to mock data for endpoints that aren't implemented in the backend yet
  const mockEndpoints = ['about', 'contact', 'banners'];
  const isMockEndpoint = mockEndpoints.includes(endpoint) && options.method !== 'POST';
  
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
  
  let mockEndpoint = cleanEndpoint;
  if (cleanEndpoint.startsWith('news/') && cleanEndpoint !== 'news') {
    mockEndpoint = 'news_detail';
  } else if (cleanEndpoint.startsWith('products/') && cleanEndpoint !== 'products') {
    mockEndpoint = 'products';
  } else if (cleanEndpoint.startsWith('galleries/') && cleanEndpoint !== 'galleries') {
    mockEndpoint = 'galleries';
  } else if (cleanEndpoint === 'hero-banners') {
    mockEndpoint = 'home_content';
  }
  
  const url = (IS_MOCK || isMockEndpoint)
    ? `${MOCK_BASE}/${mockEndpoint}.json` 
    : `${BASE_URL}${API_VERSION}/${cleanEndpoint}`
  
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...options.headers,
      },
      ...options,
    })

    if (!response.ok) {
      let errorText = '';
      try {
        errorText = await response.text();
        // Try parsing as JSON if possible
        errorText = JSON.parse(errorText);
      } catch (e) {
        // Leave as string if not JSON
      }
      
      const error = new Error(`API Error: ${response.status} ${response.statusText}`);
      error.response = {
        status: response.status,
        data: errorText
      };
      console.error(`[API Error] Status: ${response.status} | URL: ${url}`);
      console.error(`[API Error Data]:`, errorText);
      throw error;
    }

    const text = await response.text();
    try {
      const parsed = JSON.parse(text);
      if (IS_MOCK && cleanEndpoint === 'hero-banners' && parsed.data && parsed.data.hero_banners) {
        return { data: parsed.data.hero_banners[0].items };
      }
      return parsed;
    } catch (parseError) {
      const error = new Error('Invalid JSON response from server');
      error.response = { status: 200, data: text };
      throw error;
    }
  } catch (error) {
    if (!error.response) {
      console.error(`[API Request Failed] ${endpoint}:`, error.message);
    }
    throw error;
  }
}

// ============ Gallery API ============

export async function fetchGalleries() {
  return request('galleries')
}

export async function fetchGalleryByCategory(categorySlug) {
  return request(`galleries/${categorySlug}`)
}

// ============ Home API ============

export async function fetchHomeContent() {
  return request('home_content')
}

// ============ News API ============

export async function fetchNews() {
  return request('news')
}

export async function fetchNewsDetail(slug) {
  // Real API menggunakan slug sebagai parameter
  return request(`news/${slug}`)
}

// ============ About API ============

export async function fetchAbout() {
  return request('about')
}

// ============ Contact API ============

export async function fetchContact() {
  return request('contact')
}

export async function submitContact(contactData) {
  return request('contact', {
    method: 'POST',
    body: JSON.stringify(contactData)
  })
}

// ============ Products API ============

export async function fetchProducts() {
  return request('products')
}

export async function fetchProductDetail(slug) {
  return request(`products/${slug}`)
}

// ============ Hero Banners API ============

export async function fetchHeroBanners() {
  return request('hero-banners')
}

export async function fetchPageBanners() {
  return request('banners')
}
