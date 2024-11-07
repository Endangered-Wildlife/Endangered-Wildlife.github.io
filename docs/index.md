# Endangered Wild Life

Endangered Wildlife OÜ is developing a groundbreaking machine learning tool, the Biodiversity Valuator, designed to help
stakeholders assess the financial impact of their activities on biodiversity in accordance with European Sustainability
Reporting Standards (ESRS) E4. The project builds on an extensively peer-reviewed valuation methodology already tested
on 140 species, yet the ambitious task remains to account for over 8.9 million species globally. To advance this
mission, the company has begun constructing the necessary software infrastructure, including the Biodiversity Database,
which will integrate machine learning to source, retrieve, and analyze biodiversity data that goes beyond conventional
data scraping due to its complexity and the diverse, interconnected nature of global species data.

The project’s end goal is to transition from a consulting model to a SaaS platform, enabling clients to conduct
autonomous biodiversity valuations and supporting the broader trend of AI adoption in environmental sectors. Currently,
the company is working towards a Beta version of both the Biodiversity Database and Valuator, funded partially by grants
from the Expo Live Innovation Programme and Google for Startups Cloud Program. With a projected completion of 30 months,
the Beta will feature API-enabled data accessibility and machine learning-powered backend functionalities. Following
this stage, a SaaS release is planned, allowing users flexible subscription options and broad access to biodiversity
insights for sustainability reporting.

## Biodiversity Project

The Biodiversity Database is revolutionising biodiversity for business by bringing transparency and knowledge to the
industry. It is breaking boundaries in terms of biodiversity information availability – delivering access to regional
species level data.

### Specifications

### Biodiversity Overview

Biodiversity is a comprehensive platform built within the Google Cloud Platform ecosystem,
designed to streamline data management and access for users.
At its core is a robust **PostgreSQL** database, hosted on **Azure Postgresql**, responsible
for securely storing all relevant data accessible through both the **Admin Panel** and **Biodiversity API**.

The **Admin Panel**, developed using Python **Flask** and hosted on **Azure Kubernetes**, serves as the central hub for
database interactions,
offering different levels of user access for efficient data management. Simultaneously, the **Biodiversity API**,
also powered by Python **Flask** and hosted on **Azure Kubernetes**, acts as the bridge between the **PostgreSQL**
database and external clients,
ensuring secure data retrieval and transmission with the use of valid **JWT tokens**.

To enhance data processing capabilities, **Apache Airflow**, deployed on **Azure Kubernetes**,
plays a pivotal role in fetching data from third-party APIs and seamlessly integrating it into the **PostgreSQL**
database,
enriching the platform's data repository.

Furthermore, the **Client Website**, crafted using **Node.js** and hosted on **Azure Kubernetes**,
serves as the primary frontend interface for users to interact with **Biodiversity**.
Through this website, users can log in, subscribe to services, and search for information,
with the ability to retrieve **JWT tokens** using their credentials and seamlessly access the **Biodiversity API** for
data retrieval.

These components empowering users with seamless data access and management capabilities through Biodiversity.

## Machine Learning Project

### Introduction
Endangered Wildlife OÜ is developing the Biodiversity Valuator, a software tool designed to help clients assess the
financial value of biodiversity impacts, addressing a growing demand for ESG solutions. While carbon reporting has
dominated the sustainability space, biodiversity’s critical role remains underrepresented. This Valuator aims to change
that by translating biodiversity impact into financial terms, helping clients make informed decisions. Over five years,
the company has tested its valuation methodology on various species and is now transitioning from consulting to a
scalable software model.

The Biodiversity Database, a companion to the Valuator, will serve as a core data source, enhanced by machine learning
to improve valuation accuracy. Together, these tools will provide industries, investors, and financial institutions with
a way to assess biodiversity-related risks and returns, integrating biodiversity into strategic planning. With a Beta
launch planned, Endangered Wildlife OÜ aims to establish itself as a unique fintech provider in biodiversity
conservation, ultimately offering these tools as SaaS products to meet the evolving sustainability needs of the market.

### Mind Map
![ML](assets/bio.drawio)

### Project Steps

| Step | Sub-Step            | Description                                        |
|------|----------------------|----------------------------------------------------|
| 1    | Data Collection      |                                                    |
| 1.1  | Check all data sources | Review existing data sources for relevance       |
| 1.2  | Add other sources to database or API list | Integrate new data sources   |
| 1.3  | Data Aggregation     | Combine data from various sources                  |
| 2    | Data Preparation     |                                                    |
| 2.1  | EDA (Exploratory Data Analysis) |                                         |
| 2.1.1| Data Filtering       | Filter data based on relevance and quality         |
| 2.1.2| Data Validation & Cleansing | Ensure data accuracy and consistency       |
| 2.1.3| Data Formatting      | Standardize data format                            |
| 2.1.4| Data Aggregation & Reconciliation | Combine and resolve data conflicts   |
| 2.2  | Scaling and Imputation | Adjust and fill in missing data                  |
| 3    | Data Visualization   |                                                    |
| 3.1  | Show data on charts  | Use Box, HeatMap, Histogram for visualization      |
| 3.2  | Scatterplot/Pairplot | Based on important features                        |
| 4    | ML Modeling          |                                                    |
| 4.1  | Choosing Models      | Select appropriate models for analysis             |
| 4.1.1| M1: Forecasting and Regression for time series data | Temperature models, etc. |
| 4.1.2| M2: Classification   | Models for PVA, food web, etc.                     |
| 4.1.3| M3: Test Neural Network approaches | Experiment with neural networks      |
| 4.1.4| M4: Test RAG + LLM approach | Experiment with Retrieval-Augmented Generation |
| 4.2  | Training the Models  | Train models with prepared data                    |
| 4.3  | Evaluating the Models | Measure model performance                         |
| 4.4  | Hyperparameters Tuning | Optimize model parameters                        |
| 4.5  | Making Predictions   | Use models to make data-driven predictions         |
| 5    | Feature Engineering  |                                                    |
| 5.1  | Finding optimal set of inputs | Identify key inputs for models            |
| 5.2  | Creating new features based on aggregated data | Develop derived features |
| 5.3  | Transforming features to new ones | Apply transformations to features     |
| 5.4  | Speeding up data transformations | Improve data processing speed         |
| 6    | Model Deployment     |                                                    |
| 6.1  | Test in Production   |                                                   |
| 6.1.1| Test Robustness, Compatibility, and Scalability | Ensure production readiness |
| 6.2  | Create simple pipeline | Set up streamlined deployment pipeline           |
| 7    | UI/Monitoring        |                                                    |
| 7.1  | Admin Panel          |                                                   |
| 7.1.1| Monitoring Page for Models | Track model performance                      |
| 7.1.2| Setting Page for Models | Manage model settings                           |
| 7.1.3| Modify All pages to comply with the new Architecture | Update UI         |
| 7.2  | Client Website       |                                                   |
| 7.2.1| Change Bio API to use ML Models | Integrate models into Bio API          |
| 7.2.2| Comply with new Bio API | Ensure compatibility with updated API          |
| 8    | Task Management      |                                                   |
| 8.1  | Retraining Models    |                                                   |
| 8.1.1| Pipeline for retraining Models | Automate model retraining                |
| 8.1.2| Tasks to run pipelines on a defined schedule | Schedule retraining       |
| 8.1.3| Replacing the new Models | Swap in retrained models                       |
| 8.2  | Store statistics     | Log model statistics                              |
| 8.3  | Health check         | Monitor system health                             |
| 9    | Documentation        |                                                   |
| 9.1  | Proposal             | Draft and maintain project proposal               |
| 9.2  | In Code Documentation | Document codebase                                |
| 9.3  | Documentation UI     | Provide accessible UI for documentation           |