import Company from "../models/Company";

export async function getCompanies(req, res) {
  try {
    const companies = await Company.findAll();
    res.json({
      companies: companies,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getCompany(req, res) {
  const { id } = req.params;
  try {
    const company = await Company.findOne({
      where: {
        id,
      },
    });
    res.json({
      company: company,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function createCompany(req, res) {
  const { name, direction, nit, email, phone } = req.body;
  try {
    let newCompany = await Company.create(
      {
        name,
        direction,
        nit,
        email,
        phone,
      },
      {
        fields: ["name", "direction", "nit", "email", "phone"],
      }
    );
    if (newCompany) {
      return res.json({
        message: "Company Created",
        company: newCompany,
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

export async function updateCompany(req, res) {
  const { id } = req.params;
  const { name, direction, nit, email, phone } = req.body;

  try {
    const companies = await Company.findAll({
      attributes: ["id", "name", "direction", "nit", "email", "phone"],
      where: {
        id,
      },
    });
    if (companies.length > 0) {
      companies.forEach(async (company) => {
        await company.update({
          name,
          direction,
          nit,
          email,
          phone,
        });
      });
    }

    return res.json({
      message: "Company Updated Succesfully",
      company: companies,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function deleteCompany(req, res) {
  const { id } = req.params;
  try {
    const deleteRowCount = await Company.destroy({
      where: {
        id,
      },
    });
    res.json({
      message: "Company Deleted Succesfully",
      count: deleteRowCount,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong"
    });
    console.log(error);
  }
}
