/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/android-chrome-192x192.png","0448c8dd35213da0ca933cba2b439a47"],["/android-chrome-512x512.png","b24bb4f7a1eb21c2a52f518fc6cdeef5"],["/apple-touch-icon.png","ad7a453af9cf58c221ea661a9a205270"],["/assets/icons/Left.svg","0c2ee60f7f553aa2bf99fb91cf5c5767"],["/assets/icons/Logo.svg","a1193af41d154eabf9283c31d18de459"],["/assets/icons/Right.svg","70149b9248a2f8c7b0d99d513d3425c8"],["/assets/icons/arrow-down.svg","bec6e71ba2d02ec76e3a982c331c1828"],["/assets/icons/camcorder.svg","0fca5d12f18d8dea455a4aa4073dd136"],["/assets/icons/chevron-down.svg","1b8d34703fa0b001e5b7b7f473b1c217"],["/assets/icons/favourite.svg","a96f7fba5a897db9273d780d74a4c9de"],["/assets/icons/games.svg","ab5ee16541baf42be232544dc81acd45"],["/assets/icons/grid.svg","080c65bea9d608091e1ccaaa84d53198"],["/assets/icons/history.svg","95ea42ca35d92fcad2fb7b9326b871da"],["/assets/icons/home.svg","83f959d850681820adf5f10c46aa48b3"],["/assets/icons/library.svg","b6e011b218fd2ceef9f3ec2903be0761"],["/assets/icons/liked-videos.svg","35112f07fc147eae9f8d4185134756eb"],["/assets/icons/main-logo.svg","7e4695956fa7e5575c7815b098d33b97"],["/assets/icons/music.svg","c67dec0727b478a04349022dca4c717f"],["/assets/icons/notification.svg","cbac1b0dba1635adb19e563799c2c502"],["/assets/icons/search.svg","e3d1501a05c51880e8f03778c72cbc2c"],["/assets/icons/settings.svg","0700bcf727a866a6e8b16ec26f742025"],["/assets/icons/subscriptions.svg","b17ba5fe4c5a8705f617101c8715b787"],["/assets/icons/toggle-vertical.svg","7bdee5207f6c65a5d69d6a78646af13e"],["/assets/icons/toggle.svg","9846503089359b2d96c1648610c8cb18"],["/assets/icons/trending.svg","8e7de0ef50e56aa098f7a1b149c74aae"],["/assets/icons/watch-later.svg","5afc87510514805d6af0a2ca5e56d649"],["/assets/icons/white/Left.svg","aaf9635fcbca9d9b1feac96283952923"],["/assets/icons/white/Right.svg","52def60136f4cf1828eccab90e58ee00"],["/assets/icons/white/arrow-down.svg","84d8e9f6d7892079be0e20cf5a885d89"],["/assets/icons/white/camcorder.svg","cec6cd036089a50735c47dcb560c39e9"],["/assets/icons/white/chevron-down.svg","ccb75681a73690bdfa678973a17c4b59"],["/assets/icons/white/favourites.svg","b23884ff70398e93a191c711c56290f5"],["/assets/icons/white/games.svg","8238296faa8bd9caddeeab4d3537504c"],["/assets/icons/white/grid.svg","31a5b95b81c0a4627aa9b0bdd8395479"],["/assets/icons/white/history.svg","2fcd5c6b0de10ba54e0cf819b20aac14"],["/assets/icons/white/library.svg","3e3f237c242cf2b99da3d4b8ad621b6c"],["/assets/icons/white/liked-videos.svg","52cdd082783e7fdde02ce49d9f0afbb4"],["/assets/icons/white/main-logo-white.svg","b471b56839578eafaf9a43eff1afee6b"],["/assets/icons/white/music.svg","1bca86338e62ab4bef879fbd86e580e8"],["/assets/icons/white/notification.svg","3a496cd7f11e5813613c0d70c8f9c3a7"],["/assets/icons/white/search-white.svg","5219e5c0c2a2a99b99f3c0a22d63c398"],["/assets/icons/white/settings.svg","9a3404a2b771e86c48569fa31ec362de"],["/assets/icons/white/subscriptions.svg","4d4a9a83f3c8fe9da1e6d561bf049033"],["/assets/icons/white/toggle-vertical.svg","ba42ce28cff714b90d804b688c0b3f9e"],["/assets/icons/white/toggle-white.svg","495e55a9623b329d85502e56d4ac0077"],["/assets/icons/white/trending.svg","402a5131cc55955a19df7dd4eb6504b4"],["/assets/icons/white/watch-later.svg","c4de6490bbc290a7e17a84f03b181940"],["/assets/images/Cover.jpg","b1c25853fdce28d1bf2389e4d525505e"],["/assets/images/Cover1.jpg","eeed6783d30d3af1da2b31384e651a0f"],["/assets/images/Cover10.jpg","d1a1b37f7eea8ec0d81b7ed14c4223c9"],["/assets/images/Cover11.jpg","c7940adaf5e644de914dd5b69d070091"],["/assets/images/Cover12.jpg","6464a41e2d8b8ec2ffa3488fe5f7640e"],["/assets/images/Cover13.jpg","34cc50bd0e3e67b525aae07ad6dd2765"],["/assets/images/Cover14.jpg","34cc50bd0e3e67b525aae07ad6dd2765"],["/assets/images/Cover15.jpg","9a6f116228cd3ea2196b412ce5f455ae"],["/assets/images/Cover2.jpg","e0db913ddcb2d023fc8a5aa16d436138"],["/assets/images/Cover3.jpg","2987bf75b198315b543ed866103c3bff"],["/assets/images/Cover4.jpg","c37ae7e23d4c1a3d14a1e655738bc32a"],["/assets/images/Cover5.jpg","f7d44333746c41ddeecd661f1b3f9225"],["/assets/images/Cover6.jpg","7a8f313ff5bc744611729318a3c7cc7e"],["/assets/images/Cover7.jpg","3e667008ec0530459c3a57b3c23d5630"],["/assets/images/Cover8.jpg","193527228df278f72f48c450cd9e3361"],["/assets/images/Cover9.jpg","2389fceab60295ee2bfa010e52a72d05"],["/assets/images/author-image.png","31b20bd69e181d03d814f7a5b402568b"],["/assets/images/channels/Cover 1.jpg","9549e5be374b46db0f7ca84ce497d0cb"],["/assets/images/channels/Cover 2.jpg","1c4e23c7cb6185e9f17c799eafc2cbc0"],["/assets/images/channels/Cover 3.jpg","e48d71b18697cd382089dc742efd0612"],["/assets/images/channels/Cover 4.jpg","7ed462661c3c341b2207bf5c91977e13"],["/assets/images/channels/Cover 5.jpg","b9f28393163e005b81b376084f26fa4e"],["/assets/images/channels/Cover 6.jpg","19829f596661e46737a108bb619b6c86"],["/assets/images/channels/Cover.jpg","2432ae30b0b648eadf5e3d2194266a42"],["/assets/images/channels/Cover_mobile.jpg","1a3e90744c1658a602bb68f66df13380"],["/assets/images/channels/users/Oval 1.jpg","5bf0f0c34908d32cf1838b0f47df0d9b"],["/assets/images/channels/users/Oval 2.jpg","3277d5f67983dd142a7b90c9c63f360a"],["/assets/images/channels/users/Oval 3.jpg","b113834e5ed30e03573517c18488d34d"],["/assets/images/channels/users/Oval 4.jpg","55054e348b7bd4b73b17e58361434459"],["/assets/images/food.png","a0517d164510da4361162038aa3745e0"],["/assets/images/user-profile.jpg","7986c2db2678f94ef04e635a180b5643"],["/assets/images/users/Oval.jpg","e9aafac67ba64b15cb15095e2693bd31"],["/assets/images/users/Oval1.jpg","3837ccdbc4df905841e6f9910d365c7c"],["/assets/images/users/Oval2.jpg","49183a996cc65d925eebeaef8826f50b"],["/assets/images/users/Oval3.jpg","2ab518142c0512a884d7e7fda8c9ef8a"],["/assets/images/users/Oval4.jpg","440d183ef743676637af34a5f24ef22b"],["/assets/images/users/Oval5.jpg","9bffaecb45212cfe5af0fa1e1ca168f1"],["/channel.html","92c2c5f5a532cf64007ad40ab9a52024"],["/css/channels.css","221d68e595fcdedacade1ba3755581f2"],["/css/colors.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/components/fixedNavbar.css","716870d7a2cbd7077d785eace99e20e6"],["/css/components/navbar.css","44fce1d78fff3ad5674e8e0245b26195"],["/css/components/slider.css","c8ed36eb406c80218f935de60cdfb7ae"],["/css/home.css","6d046716e88ea4117954f10fb53f93f7"],["/css/mixins.css","d41d8cd98f00b204e9800998ecf8427e"],["/favicon-16x16.png","0c943eab21ece7ee625d51c5224b26a8"],["/favicon-32x32.png","6a848d672f333aacf35202840c56f981"],["/index.html","73d0af3955d376e745ac1b5f5be758b0"],["/mstile-150x150.png","f0a2bf3b527ba00862312656460789ca"],["/safari-pinned-tab.svg","fe01b8e42ddf6c2dc0e333b010526f3e"],["/scripts/index.js","21ab542df5d87d8c0d99b0d117b7b485"],["/scripts/pn-key.js","834573672a43588a0a310f44bd35bc0a"],["/scripts/scroll.js","cdab49024d1b62d376ba53a585b4457d"],["/scripts/theme.js","41fcc243e409a7efae8e8fa39f06aad0"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







