class Pagination {
  constructor(query, page) {
    this.query = query;
    this.page = page;
  }

  pagination(userPerPage) {
    const currentPage = Number(this.page) || 1; //def 1
    //page is coming from URI parameter 2nd param :> req.query.page > send just req.query for more values.
    const skip = userPerPage * (currentPage - 1);
    // 5 * (1-1) => skip 0, 5 * (2-1) => skip 5 ....

    this.query = this.query.limit(userPerPage).skip(skip);
    return this;
  }
}

module.exports = Pagination;
