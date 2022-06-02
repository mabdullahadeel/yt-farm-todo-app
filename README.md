# FODOIST

`Fodoist` is a full stack todo application built with FARM stack. FastAPI and MongoDB on the backend and ReactJS on the frontend.

<hr>

### How to run Locally?

## Backend

Here is full tutorial how you can setup your own backend in this amazing stack.

https://www.youtube.com/watch?v=G8MsHbCzyZ4

[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/G8MsHbCzyZ4/0.jpg)](https://www.youtube.com/watch?v=G8MsHbCzyZ4)

To run the backend, you need to have local mongodb instance running on you can setup a deployed instance using [MongoDB Atlas](https://www.mongodb.com/atlas/database).

### Setting up python environment

Run the following to create a virtual environment for the project. (Assuming you have python installed on local machine)

```bash
python -m virtualenv env
# OR
python -m venv env
#OR
python -m venv --system-site-packages env
#OR
python3 -m venv env

# if still doesn't work, google is your best friend!
```

If you're running the deployed instance, make sure to change the database connection string in `.env` file on the backend.

### Setting up `.env` file

To setup `.env` file on the backend, create a file named `.env` in `/backend/app`.
Add the following in the `.env` file.

```txt
JWT_SECRET_KEY=<RAMDOM_STRING>
JWT_REFRESH_SECRET_KEY=<RANDOM_SECTURE_LONG_STRING>
MONGO_CONNECTION_STRING=<MONGO_DB_CONNECTION_STRING>
# mongodb://localhost:27017/ <-- for local running instances
```

### Installing dependencies

Assuming you are in the base directory.

```bash
cd backend
pip install -r requirements.txt
```

### Activating virtual environment

```bash
# Windows
env/Scripts/activate

# MacOs + Linux
source env/bin/activate
```

### Running the backend

Assuming you are in the backend directory.

```bash
uvicorn app.app:app --reload
```

<hr>

## Frontend

#### Full Tutorial
https://youtu.be/gWdGOJs6yXo

[![The ultimate FARM stack Todo app with JWT PART II - React + ChakraUI | abdadeel](https://img.youtube.com/vi/gWdGOJs6yXo/0.jpg)](https://www.youtube.com/watch?v=gWdGOJs6yXo)

### Install dependecies

Assuming you are in the base directory.

```bash
cd fronted
```

```bash
# yarn
yarn

# npm
npm install
```

### Running frontend

```bash
# yarn
yarn start

# npm
npm start
# OR
npm run start

```
