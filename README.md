# Per-API

## install and run project

#### Project requirements

- Nodejs >= 12.x.x
- Npm >= 6.x.x

> Before run the app with ```npm run dev``` command, you need to create ```.env``` at the root directory. It must includes two variables that name
are ```PORT``` and ```DATABASE_URL```.
You can choose the ```PORT``` number that whatever you want but you need to get ```DATABASE_URL``` from project manager.

#### development 
```
$ git clone https://github.com/grafikri/per-api
$ cd per-api
$ npm install
$ npm run dev

# listen on http://localhost:3000/ 
```

#### production
```bash
npm run start
```

#### testing
```bash
npm run test
```

### Docker
```
docker pull grafikri/per-api
```

### Endpoints

- There are 2 endpoints ```GET``` and ```POST``` 
```
GET  -- /analytics?startDate=1618761004&endDate=1618761004

// response 
200
{
  "-MYLy6GWogs58eBtyMfz": {
    "date": 1618514310319,
    "domLoading": 89,
    "ttfb": 10
  },
}
```

```
POST -- /analytics

// request body 
string object

// response
200
```


