from flask import Flask, request, jsonify
import whisper
import tempfile

app = Flask(__name__)
model = whisper.load_model("base")  # You can change this to "large" if you have more resources

@app.route('/transcribe', methods=['POST'])
def transcribe():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400

    file = request.files['file']

    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    try:
        # Save the uploaded file to a temporary file
        with tempfile.NamedTemporaryFile(delete=True) as temp_file:
            file.save(temp_file.name)
            
            language = request.form.get('language', None)
            # Transcribe the audio file using the Whisper model
            result = model.transcribe(
                temp_file.name,
                # language=language,
                initial_prompt='This is a medical appointment conversation. Your task is to transcribe the conversation.',
                task='transcribe',
            )

        return jsonify(result)
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route('/hello', methods=['GET'])
def hello():
    return "Hello world"


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=4000)