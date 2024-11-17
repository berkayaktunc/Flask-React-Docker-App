#FROM python:3.11-slim

# Backend için bir çalışma dizini belirle
#WORKDIR /backend

# Sadece backend'in bağımlılıklarını kopyala
#COPY backend/requirements.txt .

# Bağımlılıkları yükle
#RUN pip install --no-cache-dir -r requirements.txt

# Backend dosyalarını kopyala
#COPY backend/ .

# Uygulamayı başlat
#CMD ["python", "app.py"]


FROM python:3.11-slim

# Çalışma dizinini ayarla
WORKDIR /app

# Gereksinim dosyasını kopyala
COPY requirements.txt .

# Bağımlılıkları yükle
RUN pip install --no-cache-dir -r requirements.txt

# Tüm backend dosyalarını kopyala
COPY . .

# Uygulamayı başlat
CMD ["python", "app.py"]
