// Function to display metadata for a sample
function displayMetadata(sample) {
    // Fetching data from the JSON file
    d3.json("samples.json").then((data) => {
        let metadata = data.metadata;
        let resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        let result = resultArray[0];

        // Selecting the panel where metadata will be displayed
        let panel = d3.select("#sample-metadata");

        // Clearing previous metadata
        panel.html("");

        // Displaying each metadata key-value pair
        for (const key in result) {
            panel.append("h6").text(`${key.toUpperCase()}: ${result[key]}`);
        }
    });
}

// Function to build charts
function buildCharts(sample) {
    // Fetching data from the JSON file
    d3.json("samples.json").then((data) => {
        let samples = data.samples;
        let resultArray = samples.filter(sampleObj => sampleObj.id == sample);
        let result = resultArray[0];

        let otu_ids = result.otu_ids;
        let otu_labels = result.otu_labels;
        let sample_values = result.sample_values;

        // Building bubble chart
        let bubbleLayout = {
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: 'markers',
            marker: {
                size: sample_values,
                color: otu_ids,
                colorscale: 'Earth'
            }
        };
        let bubbleData = [bubbleLayout];
        Plotly.newPlot("bubble", bubbleData);

        // Building bar chart
        let yticks = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();
        let barData = [
            {
                y: yticks,
                x: sample_values.slice(0, 10).reverse(),
                text: otu_labels.slice(0, 10).reverse(),
                type: "bar",
                orientation: "h",
            }
        ];
        let barLayout = {
            title: "Top 10 Bacteria Cultures Found",
            margin: { t: 30, l: 150 }
        };
        Plotly.newPlot("bar", barData, barLayout);
    });
}

// Function to build gauge chart
function buildGauge(sample) {
    // Fetching data from the JSON file
    d3.json("samples.json").then((data) => {
        let metadata = data.metadata;
        let resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
        let result = resultArray[0];

        if (!result || !result.wfreq) {
            console.error("No frequency data available for the selected sample.");
            return;
        }

        let washFrequency = result.wfreq;

        // Building gauge chart
        // This part is omitted for simplicity
    });
}

// Function to initialize the dashboard
function init() {
    // Selecting the dropdown menu
    let selector = d3.select("#selDataset");

    // Fetching data from the JSON file
    d3.json("samples.json").then((data) => {
        let sampleNames = data.names;

        // Populating dropdown menu with sample names
        sampleNames.forEach((sample) => {
            selector.append("option")
                .text(sample)
                .property("value", sample);
        });

        // Displaying initial data
        let firstSample = sampleNames[0];
        buildCharts(firstSample);
        displayMetadata(firstSample);
        buildGauge(firstSample);
    });
}

// Function to handle changes in the dropdown selection
function optionChanged(newSample) {
    buildCharts(newSample);
    displayMetadata(newSample);
    buildGauge(newSample);
}

// Initializing the dashboard
init();