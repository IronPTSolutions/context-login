API available (also postman collection) at https://github.com/IronPTSolutions/tweet-hack-api

## Contexts

Add a `Navbar` component with current user name. Render nothing if user is missing

Add a `logout` method to ApiClient (POST /logout)

Add a `logout` button to navbar that will use `async/await` to fetch API and clear `AuthContext` on success

--------------------

Create a `TweetsContext` React Context with value: `{ tweets: tweetsArray }`

Create a route to `/tweets/:id` that will render `TweetDetail` component.

`TweetDetail` will use [React Router DOM hooks](https://reactrouter.com/web/api/Hooks/useparams) to extract id from path params.

`TweetDetail` will consume `TweetsContext`, find tweet with same id and render JSON detail of this tweet.

`TweetDetail` won't perform any API call!

`TweetDetail` will redirect to / if tweet is missing.

--------------------

Create a `NotAuthenticatedRoute` to protect `Login` route from match if user is already logged
