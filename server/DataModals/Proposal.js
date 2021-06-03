const config = require('../config');

class Proposal {
  constructor(db) {
    this.collection = db.collection(`${config.mongodb.collections.proposals}`);
  }
  async submitProposal(proposal) {
    const submittedProposal = await this.collection.insertOne(proposal);
    return submittedProposal;
  }

  async getProposal(id){
    const proposal = await this.collection.findOne({"_id": id});
    return proposal;
  }

  async getAllProposalsForJob(jobId) {
    const proposals = await this.collection.find({ jobId: jobId }).toArray();
    return proposals;
  }

}
module.exports = Proposal;