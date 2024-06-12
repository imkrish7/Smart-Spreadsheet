# Solution
  Options.
    1. Read data from excel and then perform ETL (which cause loss of important data)
    2. Since there is no way data loader for excel it better to convert excel to pdf then load data is solution which I chose (not the best one but its preserve the data)

  Solution is based on 2nd option
  ```code 
    package required Spire.XLS 
  ```
  To convert into excel to pdf
  Update analyzer with excel file path which you need to analyze then use below command
  ```code 
    python analyzer.py
  ```

  ## Get into js-sol directory
  ```code
    docker compose up
  ```
  then install the pacakges
  ```code
    npm install 
  ```
  then go to `main.js` uncomment the embedding store
  then run
  ```code
    node main.js
  ```
  then comment the embeddingStore call part to avoid emedding of data

  ## For parse Perplexity AI is better provided option is not tested due to credit

  ## To query on data

  go to main.js and uncomment the ask() function call

  ```code
    node main.js
  ```
  if you want to test with question of yours please use update the question then run main.js again
  