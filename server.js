const sql = require("mssql");

async function getDataFromProcedure(dbConfig, procedureName) {
  try {
    let pool = await sql.connect(dbConfig);

    let result = await pool
      .request()
      .input("ConditionalOperator", sql.Int, 1)
      .execute(procedureName);

    console.log(result.recordsets[0]);

    return result.recordsets[0];
  } catch (error) {
    console.log(error);
  }
}

module.exports = getDataFromProcedure;
