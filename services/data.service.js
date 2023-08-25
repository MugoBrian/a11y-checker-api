const dataFormat = (data) => {
  const results = {
    violations: data.results.map((data) => ({
      id: data.ruleId,
      impact: data.level,
      tags: data.messageArgs,
      description: data.message,
      helpUrl: data.help,
      nodes: [
        {
          html: data.snippet,
          impact: data.value,
          target: [data.path],
        },
      ],
    })),
  };
  return results;
};

module.exports = dataFormat
