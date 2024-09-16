﻿## Summary

- **Frontend**: React-based web application showcasing a feed interface.
- **Backend**: Flask-based API to handle feed data and other operations.


## Prerequisites

- Node.js and npm are installed for the frontend.
- Python 3.10.10 is installed for the backend.


### Backend (Flask in Python)
1. cd into the backend directory
```bash
cd backend
```


2. Set up a virtual environment (if you haven't already):

```bash
python3 -m venv venv
```

3. Activate the virtual environment:

- **Linux/MacOS**:

```bash
source venv/bin/activate
```

- **Windows**:

```bash
venv\Scripts\activate
```


4. Install libraries:

```bash
pip install -r requirements.txt
```

Optionally, use this to add libraries to requirements.txt:
```bash
pip freeze > requirements.txt
```


5. Start the Flask development server:

```bash
flask --app server run
```

Or run this for auto-reloading when code changes (Recommended):
```bash
flask --app server run --debug
```

By default, the backend will be available at `http://localhost:5000`.
