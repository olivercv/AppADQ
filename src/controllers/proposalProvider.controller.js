import ProposalProvider from "../models/ProposalProvider";
import Document from "../models/Document";


export async function getProposalProviders(req, res) {
  try {
    const proposalProviders = await ProposalProvider.findAll();
    res.json({
      proposalProviders: proposalProviders,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getProposalProvider(req, res) {
  const { id } = req.params;
  try {
    const proposalProvider = await ProposalProvider.findOne(
      {
        where: {
          id,
        },
      }
    );
    res.json({
      proposalProvider: proposalProvider,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}
//get proposal formId
export async function getPPForm(req, res) {
  const { id } = req.params;
  try {
    const proposalProviders = await ProposalProvider.findAll(
      {
        where: {
          formId:id,
        },
      }
    );
    res.json({
      proposalProviders: proposalProviders,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function createProposalProvider(req, res) {
  const { name, nit, date, formId} = req.body;
  try {
    let newProposalProvider = await ProposalProvider.create(
      {
        name,
        nit,
        date,
        formId
    
      },
      {
        fields: ["name", "nit","date","formId"],
      }
    );
    if (newProposalProvider) {
      return res.json({
        message: "ProposalProvider Created",
        proposalProvider: newProposalProvider,
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

export async function updateProposalProvider(req, res) {
  const { id } = req.params;
  const { name, nit, date, formId} = req.body;

  try {
    const proposalProviders = await ProposalProvider.findAll({
      attributes: ["id", "name","nit","date", "formId"],
      where: {
        id,
      },
    });
    if (proposalProviders.length > 0) {
      proposalProviders.forEach(async (proposalProvider) => {
        await proposalProvider.update({
          name,
          nit,
          date,
          formId
        });
      });
    }

    return res.json({
      message: "ProposalProvider Updated Succesfully",
      proposalProvider: proposalProviders,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function deleteProposalProvider(req, res) {
  const { id } = req.params;
  try {
    const deleteRowCount = await ProposalProvider.destroy({
      where: {
        id,
      },
    });
    res.json({
      message: "ProposalProvider Deleted Succesfully",
      count: deleteRowCount,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
    });
    console.log(error);
  }
}
