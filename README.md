# Belly Button Biodiversity Dashboard

## Background
In this assignment, you will build an interactive dashboard to explore the [Belly Button Biodiversity dataset](https://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/), which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Before You Begin
Create a new repository for this project called belly-button-challenge. Do not add this Challenge to an existing repository.

Clone the new repository to your computer.

Inside your local git repository, copy the files from in the StarterCode folder contained within the Module 14 Challenge zip file. i.e. index.html, samples.json, and the static folder.

Push the above changes to GitHub.

Deploy the new repository to GitHub Pages.

## Files
Download the following files to help you get started:
- [Module 14 Challenge files](https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/Starter_Code.zip)

## Instructions
Complete the following steps:

- Use the D3 library to read in samples.json from the URL https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json.
- Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
  - Use sample_values as the values for the bar chart.
  - Use otu_ids as the labels for the bar chart.
  - Use otu_labels as the hovertext for the chart.
- Create a bubble chart that displays each sample.
  - Use otu_ids for the x values.
  - Use sample_values for the y values.
  - Use sample_values for the marker size.
  - Use otu_ids for the marker colors.
  - Use otu_labels for the text values.
- Display the sample metadata, i.e., an individual's demographic information.
  - Display each key-value pair from the metadata JSON object somewhere on the page.
- Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard.

## Advanced Challenge Assignment (Optional with no extra points earning)
The following task is advanced and therefore optional.

- Adapt the Gauge Chart from [Plotly.js](https://plot.ly/javascript/gauge-charts/) to plot the weekly washing frequency of the individual.
- You will need to modify the example gauge code to account for values ranging from 0 through 9.
- Update the chart whenever a new sample is selected.

## Requirements
- Bar Chart (30 points)
  - Chart initializes without error
  - Chart updates when a new sample is selected
  - Chart uses Top 10 sample values as values
  - Chart uses otu_ids as the labels
  - Chart uses otu_labels as the tooltip
- Bubble Charts (40 points)
  - Chart initializes without error
  - Chart updates when a new sample is selected
  - Chart uses otu_ids for the x values
  - Chart uses otu_ids for marker colors
  - Chart uses sample_values for the y values
  - Chart uses sample_values for the marker size
  - Chart uses otu_labels for text values
- Metadata and Deployment (30 points)
  - Metadata initializes without error
  - Metadata updates when a new sample is selected
  - App Successfully Deployed to Github Pages

## Grading
This assignment will be evaluated against the requirements and assigned a grade according to the following table:

Grade	Points
A (+/-)	90+
B (+/-)	80–89
C (+/-)	70–79
D (+/-)	60–69
F (+/-)	< 60

## Submission
To submit your Challenge assignment, click Submit, and then provide the URL of your GitHub repository for grading.
