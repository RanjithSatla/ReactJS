# Hooks:

# useEffect() :

- No Dependency Array : useEffect is called everytime component is rendered.
- Empty Dependency Array : useEffect is called only for the initial render.
- Dependency Array : useEffect is called everytime the value in the dependency array is updated.

# useState() :

1. Don'ts:

   - Don't create useState outside of the component.
   - Don't create inside a loops and if conditions.

2. Do's :
   - Do create in the top of the component.

<br></br>

# Routing :

1. Client Side Routing :

   - The application loads all the data intially.
   - Whenever there is a change in route app is changed i.e.., Component gets rendered without refreshing the page.

2. Server Side Routing :

   - Here the path "/xyz" makes an api call to fetch the xyz page from server.
   - The page refreshes each time a route is changed.
