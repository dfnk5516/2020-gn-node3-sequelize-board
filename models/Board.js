module.exports = (sequelize, Sequelize) => {
  return sequelize.define('Board', {
    // idx: {
    //   type: Sequelize.INTEGER(11),
    //   primarykey: true,
    //   autoIncrement: true
    // },
    title: {
      type: Sequelize.STRING(255),
      allowNull: false
    },
    writer: {
      type: Sequelize.STRING(20),
    },
    content: {
      type: Sequelize.TEXT()
    },
    rnum: {
      type: Sequelize.INTEGER(11),
      defaultValue: 0
    }
  }, {
    timestamp: true,
    charset: 'utf8',
    tableName: 'seqboard'
  })
}