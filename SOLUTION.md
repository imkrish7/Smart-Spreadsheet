# Solution
  Options.
    1. Read data from Excel and then perform ETL (which causes loss of important data)
    2. Since there is no way data loader for Excel it better to convert Excel to PDF and then load data is the solution I chose (not the best one but it preserves the data)

  The solution is based on 2nd option
  ```code 
    package required Spire.XLS 
  ```
  To convert into Excel to pdf
  Update the analyzer with the Excel file path which you need to analyze then use the below command
  ```code 
    python analyzer.py
  ```

  ## Get into js-sol directory
  ```code
    docker-compose up
  ```
  then install the packages
  ```code
    npm install 
  ```
  then go to `main.js` and uncomment the embedding store
  run
  ```code
    node main.js
  ```
  then comment on the embeddingStore call part to avoid embedding data

  ## For parse Perplexity AI is better. The provided solution is not tested due to credit
  Reason to believe in the above solution
 ![Screenshot from 2024-06-12 16-15-30](https://github.com/imkrish7/Smart-Spreadsheet/assets/20140249/b53950ed-af28-4838-b08d-c685ad26cb3f)
  

  ## To query on data

  go to main.js and uncomment the ask() function call

  ```code
    node main.js
  ```
  if you want to test with question of yours please use update the question then run main.js again

