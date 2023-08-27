In order to run this tiny app you need:
1) Java 17 on your machine;
2) Maven;
3) Docker;

To startup backend part:
1) Go to 'startup' folder and run `docker-compose up` - this will spin container with db;
2) Next, locate the 'backend' folder and run `mvn spring-boot:run`.

To startup frontend part:
1) Locate to 'frontend' folder and run `npm install`;
2) After successful installation npm modules simply run `npm start`.

Congratulations, you are able to use this simple app!
