FROM node:20

# Çalışma dizinini ayarla
WORKDIR /app

# package.json ve package-lock.json dosyalarını kopyala
COPY package.json package-lock.json ./

# Bağımlılıkları yükle
RUN npm install

# Tüm frontend dosyalarını kopyala
COPY . .

# Uygulamayı başlat
CMD ["npm", "run", "dev"]




# HANGİSİ AMEKA!!!!!!

#FROM node:20

# Çalışma dizinini ayarla
#WORKDIR /frontend

# Sadece bağımlılık dosyalarını kopyala (cache avantajı için)
#COPY frontend/package.json frontend/package-lock.json ./

# Bağımlılıkları yükle
#RUN npm install

# Geriye kalan dosyaları kopyala
#COPY frontend/ .

# Uygulamayı başlat
#CMD ["npm", "run", "dev"]



#FROM node:20

# Çalışma dizinini ayarla
#WORKDIR /frontend

# Bağımlılık dosyalarını kopyala (cache için hedeflenmiş kopyalama)
#COPY frontend/package.json frontend/package-lock.json ./

# Bağımlılıkları yükle
#RUN npm install

# Geriye kalan tüm dosyaları kopyala
#COPY frontend/ ./

# Uygulamayı başlat
#CMD ["npm", "run", "dev"]
