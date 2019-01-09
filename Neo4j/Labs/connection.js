const neo4j = require('neo4j').v1;
const driver = new neo4j.driver("bolt://localhost:7687", neo4j.auth.driver("neo4j", "castro03"));
const session = driver.session(neo4j.session.READ);