React Chat App Done:

How to use:
1. Pull from git
2. Run npm install
3. Run npm build (for production) or npm start (for dev)
4. Run node server

If you are in development, you can use the app on localhost:8080 and in production you can use it on localhost:8999

Technologies used:
1. React
2. Redux
3. Saga
4. WebSockets
5. Express
6. Webpack
7. Jest
8. SCSS

What is done:
1. You can exchange messages between two tabs in the same browser
2. You can format messages using commands: /think <message>, /fadelast <message>, /highlight <message>
3. Your messages are automatically formatted after send to include the 😉 on (wink) ;) and 😊 оn (smile) :)
4. Command /nick <name> will change your username
5. Command /oops will remove your last message
6. Command /countdown <timeInSeconds> <url> will forward your chat buddy to a new url after the countdown is done
7. When your message buddy writes you will be notified
8. Test for util functions and reducers are done with jest
9. Small UI kit library can be found in src/components/ui
10. Composite Components are in the src/components folder
11. Almost all the logic is on the client side with a plain server that broadcasts.

Work log:
* 23.06.2018 start 10 a.m. end 18 p.m. with an hour rest :)
* 24.06.2018 start 18 p.m. end 20 p.m.
* 25.06.2018 start 11 a.m. end 16 p.m.
