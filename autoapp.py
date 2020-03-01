# -*- coding: utf-8 -*-
"""Create an application instance."""

from boba.routes import app
application = app  # uwsgi magic

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
