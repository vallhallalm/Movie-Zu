
FROM node:10

# Créez un répertoire de travail et copiez sur nos fichiers de manifeste de dépendance.
WORKDIR / movie-zu
COPY ["package.json", "package-lock.json*", "./"]

# Si vous utilisez du fil:
# construction de fils
RUN npm install --production --silent && mv node_modules ../

# Exposer PORT 3000 sur notre machine virtuelle afin que nous puissions exécuter notre serveur
EXPOSE 3000 