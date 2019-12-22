function defDict(type) {
  const dict = {};
  return {
    get: function(key) {
      if (!dict[key]) {
        dict[key] = type.constructor();
      }
      return dict[key];
    },
    dict: dict
  };
}

function reconstructItinerary(tickets) {
  const graph = defDict([]);
  const reconstructed = [];

  for (const [frm, to] of tickets) {
    graph.get(frm).push(to);
    graph
      .get(frm)
      .sort()
      .reverse();
  }

  function dfs(graph, source, result) {
    while (graph.get(source).length > 0) {
      let newSource = graph.get(source).pop();
      dfs(graph, newSource, result);
    }
    result.push(source);
  }

  dfs(graph, "SEA", reconstructed);

  return reconstructed.reverse();
}

reconstructItinerary([
  ["EZE", "AXA"],
  ["TIA", "ANU"],
  ["ANU", "SEA"],
  ["SEA", "ANU"],
  ["ANU", "EZE"],
  ["TIA", "ANU"],
  ["AXA", "TIA"],
  ["TIA", "SEA"],
  ["ANU", "TIA"],
  ["SEA", "TIA"]
]);

// Returns ["SEA", "ANU", "EZE", "AXA", "TIA", "ANU", "SEA", "TIA", "ANU", "TIA", "SEA"];
