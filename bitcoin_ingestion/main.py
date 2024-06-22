import psycopg2
from config import config

def connect():
    """ Connect to the PostgreSQL database server """
    conn = None
    try:
        # Read connection parameters from a configuration file
        params = config()

        # Connect to the PostgreSQL server using the connection parameters
        print('Connecting to the PostgreSQL database...')
        conn = psycopg2.connect(**params)
        
        # Create a cursor object for database operations
        cur = conn.cursor()
        
        # Execute a statement to get the PostgreSQL database version
        print('PostgreSQL database version:')
        cur.execute('SELECT version()')

        # Fetch and print the database version
        db_version = cur.fetchone()
        print(db_version)
        
        # Close the cursor
        cur.close()
    except (Exception, psycopg2.DatabaseError) as error:
        # Print any error that occurs during the database operation
        print(error)
    finally:
        # Close the database connection if it was established
        if conn is not None:
            conn.close()
            print('Database connection closed.')

if __name__ == '__main__':
    # Call the connect function when the script is run
    connect()

