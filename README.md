# Businees Speed Dating backend

- [Frontend live site](https://www.bsdating.com/)
- [Frontend Github](https://github.com/StefanoFrontini/bsp)

This is a [Strapi application v3](https://strapi.io/) deployed on Heroku.

I created 2 collection types:

- Contatto (italian name for contact)
- Evento (italian name for Event)

One Contatto has and belongs to many Events (many-to-many relationship)

## Setup

- Sign up a [Free Heroku Account](https://signup.heroku.com/)
- Create a new project
- Install the Heroku Postgres addon
- Retrieve database credentials
- Create a [Cloudinary Account](https://cloudinary.com/)
- Retrive Cloudinary credentials

```bash
# Clone the following repository
$ git clone https://github.com/StefanoFrontini/bsd-backend

# Create a .env file on the root of the project and copy your database credentials
DATABASE_HOST=XXX
DATABASE_PORT=XXX
DATABASE_NAME=XXX
DATABASE_USERNAME=XXX
DATABASE_PASSWORD=XXX
CLOUDINARY_NAME=XXX
CLOUDINARY_KEY=XXX
CLOUDINARY_SECRET=XXX
LIST_ID=XXX // Mailchimp list_id
MAILCHIMP_API_KEY=XXX
MAILCHIMP_SERVER=XXX
ZOHO_PSW=XXX
ZOHO_SMTP=XXX
ZOHO_USER=XXX
SMTP_PORT=XXX
telegramToken=XXX
telegramChatId=XXX

# Go into the repository
$ cd bsd-backend

# Install dependencies
$ npm install

# Run the backend
$ npm run develop
```
