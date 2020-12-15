import ProposalEvaluation from "../models/ProposalEvaluation";

import ProposalProvider from "../models/ProposalProvider";


export async function getProposalEvaluations(req, res) {
  try {
    const proposalEvaluations = await ProposalEvaluation.findAll();
    res.json({
      proposalEvaluations: proposalEvaluations,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getProposalEvaluation(req, res) {
  const { id } = req.params;
  try {
    const proposalEvaluation = await ProposalEvaluation.findOne({
      where: {
        id,
      },
    });
    res.json({
      proposalEvaluation: proposalEvaluation,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}
//get proposal evaluation ==> proposal providers
export async function getPEP(req, res) {
  const { id } = req.params;
  try {
    const proposalEvaluation = await ProposalEvaluation.findOne({
      where: {
        id,
      },
      include: [{
        model: ProposalProvider,
        as: 'proposalProviders',
        required: false,
      // Pass in the Document attributes that you want to retrieve
        attributes: ['id', 'name','economicProposal','date','formId','warranty']
      }]
    });
    res.json({
      proposalEvaluation: proposalEvaluation,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function createProposalEvaluation(req, res) {
  const { code } = req.body;
  try {
    let newProposalEvaluation = await ProposalEvaluation.create(
      {
        code, 
        
      },
      {
        fields: ["code"],
      }
    );
    if (newProposalEvaluation) {
      return res.json({
        message: "ProposalEvaluation Created",
        proposalEvaluation: newProposalEvaluation,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function updateProposalEvaluation(req, res) {
  const { id } = req.params;
  const {code} = req.body;

  try {
    const proposalEvaluations = await ProposalEvaluation.findAll({
      attributes: ['id','code'],
      where: {
        id,
      },
    });
    if (proposalEvaluations.length > 0) {
      proposalEvaluations.forEach(async (proposalEvaluation) => {
        await proposalEvaluation.update({
            code, 
            
        });
      });
    }

    return res.json({
      message: "ProposalEvaluation Updated Succesfully",
      proposalEvaluation: proposalEvaluations,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function deleteProposalEvaluation(req, res) {
  const { id } = req.params;
  try {
    const deleteRowCount = await ProposalEvaluation.destroy({
      where: {
        id,
      },
    });
    res.json({
      message: "ProposalEvaluation Deleted Succesfully",
      count: deleteRowCount,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong"
    });
    console.log(error);
  }
}
