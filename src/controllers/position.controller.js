import Position from "../models/Position";
import Office from "../models/Office"
export async function getPositions(req, res) {
  try {
    const positions = await Position.findAll({
      include: [
        {
          model: Office,
          as: 'office',
        }
      ]
    });
    res.json({
      positions: positions
    });
  } catch (error) {
    console.log(error);
  }
}


export async function getPosition(req, res) {
  const { id } = req.params;
  try {
    const position = await Position.findOne(
      {
        where: {
          id,
        },
        include: [{
          model: Office,
          as: 'office',
          required: false
        }]
      }
    );
    res.json({
      position: position,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function createPosition(req, res) {
  const { officeId, name, active} = req.body;
  try {
    let newPosition = await Position.create(
      {
        officeId,
        name,
        active
      },
      {
        fields: ["officeId", "name", "active"],
      }
    );
    if (newPosition) {
      return res.json({
        message: "Position Created",
        position: newPosition,
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

export async function updatePosition(req, res) {
  const { id } = req.params;
  const { officeId, name, active } = req.body;

  try {
    const positions = await Position.findAll({
      attributes: ['id','officeId', 'name', 'active'],
      where: {
        id,
      },
    });
    if (positions.length > 0) {
      positions.forEach(async (position) => {
        await position.update({
          officeId,
          name,
          active
        });
      });
    }

    return res.json({
      message: "Position Updated Succesfully",
      position: positions,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong",
      data: {},
    });
    console.log(error);
  }
}

export async function deletePosition(req, res) {
  const { id } = req.params;
  try {
    const deleteRowCount = await Position.destroy({
      where: {
        id,
      },
    });
    res.json({
      message: "Position Deleted Succesfully",
      count: deleteRowCount,
    });
  } catch (error) {
    res.status(500).json({
      message: "Something goes wrong"
    });
    console.log(error);
  }
}