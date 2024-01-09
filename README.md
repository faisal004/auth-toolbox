



https://github.com/faisal004/auth-toolbox/assets/88244542/324e9bf4-e36d-476c-8d36-d71006581ae3



# Auth-Kit

Small project implementing Nextauth.

## Key Features

- User can sign in using credentials.
- User can sign in using providers(Google & Github).
- User email is verified if using credentials .
- Using [RESEND](https://resend.com) email are send.
- User can reset their passwords.
- Also two factor athentication is also implemented


## Installation

Clone the project on your machine

```bash
  git clone https://github.com/faisal004/auth-toolbox.git
```
Open Project
```bash
cd auth-toolbox
```
Install dependencies
```bash
npm install
```

Set up .env file
```bash
DATABASE_URL=""
DIRECT_URL=""
AUTH_SECRET=""

GITHUB_CLIENT_SECRET=
GITHUB_CLIENT_ID=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
RESEND_API_KEY=
```

## Setup Database
You can go to [neon.tech](https://neon.tech) to get a free postgres instance.Now run
```bash
npx prisma generate
npx prisma db push

```
Start app
```bash
npm run dev
```



## Feedback 

Feel free to provide Feedback at 
faisalhusain1320@gmail.com
