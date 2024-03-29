
# Dockerfile

FROM node:14-bullseye-slim

# Installing libvips-dev for sharp Compatability
RUN apt-get update && apt-get install libvips-dev -y

# Set environment
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}


# Copy the configuration files
WORKDIR /opt/
COPY ./package.json  ./
ENV PATH /opt/node_modules/.bin:$PATH

# Install dependencies
RUN npm install

# Copy the application files
WORKDIR /opt/app
COPY ./ .

# Build the Strapi application
RUN npm run build

# Expose the Strapi port
EXPOSE 1337

# Start the Strapi application
#CMD ["npm", "run", "develop"]
CMD ["npm", "start"]
