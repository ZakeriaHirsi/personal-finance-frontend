# HelloWorld

##### Table of Contents  
- [Personal Finance Frontend](#personal-finance-frontend)  
- [Angular](#angular)  

# personal-finance-frontend

Frontend service for an investment manager platform geared towards muslims which will enable users to keep track of their pensions, shares, stocks, salary and all things personal finance including tax calculators, salary brackets etc. The aim of this project is to help better understand how to keep ontop of your money and generate further wealth in a way that is halal (Islamically permissible) by avoiding interest.

## Technologies
### Docker

Docker is used to containerise the application and build an image using docker build. This is useful to be able to run the program on any environment as its running in an image rather than relying on a baremetal environment where specific dependencies need to be installed. Dockerfile contains the golang:1.22.5-alpine image and exposes the backend on port 8080

To run the container in the console, use:
- docker build -t zakeriahirsi/angular-app .
- docker run -d -p 80:80 --name angular-app-container zakeriahirsi/angular-app


### ci/cd

This repo has ci/cd implemented using github actions. A cicd.yml file exists with two jobs
- Build: Loads the envirnoment variables, builds a docker image, and pushes the image into a remote docker repository
- Deploy: This step runs in the context of an ec2 instancce. Depends on the build stage, logs into the docker hub and pulls down the previously pushed image. The old image is deleted from the ec2 instance and the new downloaded image is run as a svc
  
The deployment will only kick in when a new push to the main branch has happened, and the changes will be live soon after. The pipeline relies on 3 pipeline variables PORT, DOCKER_USERNAME and DOCKER_PASSWORD. A github action runner is connected that runs the deploy stage on an ec2 instance

### AWS EC2

This service is running in an ec2 instance by running a docker image on it. The instance is curently up 24 hours a day and has some ingress rules to only allow requests to certain ports from the outside world (frontend and backend requests). This instance is connected automatically to the pipeline described above via a github runner.

## Architecture

Architecture of the project below (subject to change as development continues)

![image](https://github.com/user-attachments/assets/34bd1b2e-397e-4bfb-a8eb-135b0c0d6f60)


## Angular
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
