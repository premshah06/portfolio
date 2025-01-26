import React from 'react';

import Python from '../assests/python.png';
import SQL from '../assests/sql.png';
import C from '../assests/c.png';
import Java from '../assests/java.png';

import PowerBI from '../assests/powerbi.png';
import Redshift from '../assests/aws_redshift.png';
import Snowflake from '../assests/snowflake.png';

import TensorFlow from '../assests/tensorflow.png';
import MLClustering from '../assests/clustering.png';
import MLRegression from '../assests/regression.png';

import MSSQL from '../assests/mssql.png';
import Neo4j from '../assests/neo4j.png';
import MongoDB from '../assests/mongodb.png';
import Cassandra from '../assests/cassandra.png';
import PostgreSQL from '../assests/postgresql.png';
import Hadoop from '../assests/hadoop.png';
import Spark from '../assests/spark.png';
import awsr from '../assests/awsr.png';
import awsg from '../assests/awsg.png';
import awsa from '../assests/awsa.png';
import tableau from '../assests/tableau.jpg';

const Skills = () => {
  const skills = [
    { src: Python, alt: 'Python', text: 'Python' },
    { src: SQL, alt: 'SQL', text: 'SQL' },
    { src: PowerBI, alt: 'Power BI', text: 'Power BI' },
    { src: tableau, alt: 'Tableau', text: 'Tableau' },
    //{ src: C, alt: 'C', text: 'C' },
    { src: awsr, alt: 'AWS Redshift', text: 'AWS Redshift' },
    { src: awsg, alt: 'AWS Glue', text: 'AWS Glue' },
    { src: awsa, alt: 'AWS Athena', text: 'AWS Athena' },
    { src: Java, alt: 'Java', text: 'Java' },
    
    //{ src: Redshift, alt: 'Amazon Redshift', text: 'Amazon Redshift' },
    { src: Snowflake, alt: 'Snowflake', text: 'Snowflake' },
    { src: TensorFlow, alt: 'TensorFlow', text: 'TensorFlow' },
    { src: MLClustering, alt: 'Clustering', text: 'Clustering' },
    { src: MLRegression, alt: 'Regression', text: 'Regression' },
    { src: MSSQL, alt: 'MS-SQL Server', text: 'MS-SQL Server' },
    { src: Neo4j, alt: 'Neo4j', text: 'Neo4j' },
    { src: MongoDB, alt: 'MongoDB', text: 'MongoDB' },
    { src: Cassandra, alt: 'Cassandra', text: 'Cassandra' },
    { src: PostgreSQL, alt: 'PostgreSQL', text: 'PostgreSQL' },
    { src: Hadoop, alt: 'Hadoop', text: 'Hadoop' },
    { src: Spark, alt: 'Spark', text: 'Spark' },
  ];

  return (
    <div id="skills" className="w-full min-h-screen bg-[#f7f7f7] text-gray-800 pb-32 md:pt-20">
      <div className="max-w-[1200px] mx-auto px-6 py-12 flex flex-col justify-center">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </h2>
          <p className="py-4 text-lg">
            A showcase of technologies and tools I have hands-on experience with.
          </p>
        </div>

        {/* Skill Tiles */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map(({ src, alt, text }, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center justify-center p-6 rounded-xl shadow-lg bg-white hover:shadow-xl hover:scale-105 transition-transform duration-300 hover:bg-gradient-to-r hover:from-[#f8e1e7] hover:to-[#f4f4f4]"
            >
              <img
                className="w-16 h-16 mb-4 transition-transform duration-300 group-hover:scale-110"
                src={src}
                alt={`${alt} icon`}
              />
              <p className="text-lg font-medium group-hover:text-pink-600">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
