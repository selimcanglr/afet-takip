# afet-takip

## Purpose
The main purpose of this project is to provide an intuitive environment for tracking the organization of volunteer help centers that are formed with the aim of sending supplies and equipment to disaster zones. 

Even though these centers are established with good intentions, their needs and organization go out of control over time as the size of the organization increases and managing it becomes more complex. There is also no way for volunteers who are willing to go to these help centers to know whether there is a need of volunteers, supply, or equipment. Therefore, both the volunteers and the centers unnecessarily lose time. After the Turkey - Syria earthquake in February 2023, in Turkey, we have seen examples of these issues on the first-hand. At the end, volunteers relied on external parties like WhatsApp, Google Spreadsheets to gain information about which help centers need volunteers and supply. Moreover they had questions like:
  - Which help centers currently need help and where are they located at?
  - What kind of volunteers are they looking for?
  - How many volunteers are needed?
  - How urgent is the need for volunteers?
  - If they do not need volunteers at the moment, will they need it at some point? (at busy hours)
  - What kind of supplies are needed and what are their quantities?

and so on.

To avoid these issues and optimize the overall volunteering process, we decided to create a central application to track and manage all of the needs of both the volunteers and the help centers. We aim to cover supply and volunteer management of the help centers with the hopes that both the volunteers and the help centers can be more organized. And in the end we hope that by optimizing this process, we can have more efficient disaster relief efforts.

## Setup
### Requirements
1. NodeJS
2. Docker Daemon
3. docker-compose

### Installation steps
1.  Clone this repository
    ```bash
        git clone https://github.com/selimcanglr?tab=repositories
    ```
2. Install the dependencies using your favourite package manager (we will use npm)
    ```bash
        npm install
    ```

Following these steps will make the application ready to be run.

### Running the Application
To run the application you need to make sure a few things. First of all, to be able to provide a database connection URL to Prisma, make sure to have an environment file named `.env` in the root directory of the project. If it doesn't exist, you can create it. There are two important environment variables: `DATABASE_URL` and `NODE_ENV`.

1. *`DATABASE_URL`*  should be the **connection string** for the database. By default, we have a docker-compose file that runs a PostgreSQL image in docker. If you are using the docker-compose file provided, you can use the following URL: 
    ```
    postgres://postgres:postgres@localhost:5432/<db_name>
    ``` 
    where `<db_name>` is the name of your database. 

    **If you decide to change the database specifications** in the docker-compose files or to use a completely different database, you need to provide the valid database connection string for the `DATABASE_URL` variable. Moreover, if you decide to change the database provider as well (meaning if you don't use PostgreSQL), you need to navigate to the `prisma/scheme.prisma` file and replace
    ```js
    datasource db {
        provider = "postgresql"
        url      = env("DATABASE_URL")
    }
    ```

    with 
    ```js
    datasource db {
        provider = <your_provider>
        url      = env("DATABASE_URL")
    }
    ```
    For more information about datasources, you may visit the [Prisma documentation.](https://www.prisma.io/docs/concepts/components/prisma-schema/data-sources)

2. `NODE_ENV` variable determines the mode of the application, currently `DEV` and `PROD` mods are supported (development and production, respectively).
3. After setting the environment variables and making sure you have installed the necessary requirements specified above, start the database instance:
   ```bash
    docker-compose up
   ```
   This process might take some time for the first tiem of calling it because of the initialization process, but it should be quick after that.
4. Then, run the application:
   ```bash
    npm run start
   ```
## Resources


## Workflow and Main Concepts
### Prisma

### Resource Generation

### Controller-Service-Module Structure

### Data Transfer Objects (DTO)

### Entities

### Validation

### Handling/Throwing Errors
#### Approach to Throwing Errors

#### Error response Structure


## Filesystem
### File naming convention

### Folder naming convention

## Tools available
### Prisma Studio

### Swagger API Documentation

### Nest CLI
