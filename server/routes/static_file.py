import bottle


# The static files are things such as Javascript, CSS, images files.
# Static files are files that don't change when the application is running.
@bottle.get("/static/<filepath:path>")
def _get(filepath):
	return bottle.static_file(filepath, root="../static")
