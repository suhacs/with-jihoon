import contextlib
import sqlite3


# Name of the database file
dbpath = "database.sqlite"


# A function that returns connection to the database
# "rw" means read-write privillege. For example, if the mode is r (read) only, the user cannot write to the database; i.e inserting a row
def connect(database=dbpath, mode="rw"):
	con = sqlite3.connect(f"file:{database}?mode={mode}", uri=True)
	cur = con.cursor()
	cur.execute("BEGIN TRANSACTION")
	cur.execute("PRAGMA foreign_keys=1")
	cur.execute("COMMIT TRANSACTION")
	return contextlib.closing(con)


# Todo - within main function
# 1. Create schemas for the tables
	# users table
	# session table
	# entries table
	# categories? table
# 2. Write tables to the database
def main():
	pass


# Usage: python3 database.py
#	This script will create a local sqlite database file called "database.sqlite" with all the tables we need.
if __name__ == "__main__":
	main()
