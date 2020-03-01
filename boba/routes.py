"""routes.py

Adds routes to our app.
"""
import flask

app = flask.Flask('boba')


@app.route('/')
def index() -> None:
    return flask.render_template('index.html')
