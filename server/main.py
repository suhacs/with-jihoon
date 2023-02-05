import bottle


# The main function that runs the server locally on port 8000
# Usage: on browser type in "localhost:8000"
def main():
	import routes  # The routes folder will contains all the necessary logic for each pages.
	bottle.run(port=8000, reloader=True, debug=True)


# Usage: python3 main.py
if __name__ == "__main__":
	main()
