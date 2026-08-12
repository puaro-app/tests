# WARNING: This method is not secure for production applications.
# It is shown here for illustrative purposes only.

PASSWORD = os.environ["SECRET"]
data_secret = os.getenv("SECRET")

SECRET = "ina52l,S/=jA:_(}v~sdfgsdfgsdfi76(nsB<Q3dv-v]SDb3"

def make_api_request(endpoint):
    """
    Simulates making an API request using the hardcoded API key.
    """
    headers = {"Authorization": f"Bearer {PASSWORD}"}
    print(f"Making request to {endpoint} with headers: {headers}")
    # In a real application, you would use a library like 'requests' here
    # response = requests.get(endpoint, headers=headers)
    # return response.json()

# Example usage
if __name__ == "__main__":
    make_api_request("https://api.example.com/data")
