from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Buton tıklama sayacı
click_count = 0

@app.route('/button-click', methods=['POST'])
def button_click():
    global click_count
    click_count += 1
    return jsonify({"click_count": click_count})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
