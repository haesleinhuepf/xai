# Contributing to the Explainable AI Notebooks

Welcome to this page and great to see you are considering to contribute to this project. 
Please note that we have a [code of conduct](CODE-OF-CONDUCT.md) in this project. Please follow it to make this a happy community project.

Contributions like feedback, suggestions, notebooks, code, data and pull-requests are very welcome.
It is recommended to open a [github issue](https://github.com/haesleinhuepf/xai/issues) 
to discuss things first and make a plan before you spend time and send a pull-request that later cannot be merged because of misunderstandings.

## Aim and scope of this notebook collection

The Python Jupyter notebooks in this collection are written for Advanced Python developers who are interested in 
diving into Explainable Artificial Intelligence. 
The content aims to be understandable by a broad audience, not just computer scientists.
The notebooks here do not aim to explain algorithms in very technical detail.
Instead, links to detailed explanations, videos and tutorials are provided.
The content focuses on applied data science answering general questions such as: 
* How can Explainable AI algorithms be used in real-world projects?

If you want to contribute new content to this collection, please make sure that

1. Notebooks are written in simple language. Try to avoid technical language or explain new terms before using them. 
2. Keep the notebooks short and concise. 
  Add links to other resources where algorithms are explained.
  Ideally, every notebook explains just one aspect and can be read in about 10 minutes. 
  Avoid long explanations about various aspects. 
  Split long stories in short, digestable notebooks.
3. Avoid large code sections in notebooks. 
  If such code is of general interest, consider shipping it as Python package that can be installed via pip. 
  If code serves purposes only for a specific notebook, e.g. an example data generator, put it into a python file in the same folder and explain the reader that this is a custom function that lives in the same directory.
4. Make sure the notebooks are executable. 
  Ideally, every notebook can just be executed and does not depend on the output of other notebooks. 
  Exceptions are ok, e.g. if big data is processed, one notebook can generate or download the data, and other notebooks process it.
5. The examples should be practically relevant, ideally demonstrating usage of Generative AI in real-world scenarios.
7. Add installation instructions for specific libraries to the `readme.md` of the chapter you are contributing to.
  Make sure these libraries can be installed on computers of a broad audience.
8. If you send a pull-request, please make sure that you hold the copyright of the materials you send and that the materials can be shared under CC-BY 4.0 license (see copyright section below).

Out of scope topics are
1. Python basics
2. Deep-Learning basics such as how to use Pytorch or Tensorflow
2. Libraries and custom code should be avoided that is hard to install and/or only works on specific operating systems. 
  Libraries which are not distributed via `pip` and/or `conda` should not be demonstrated here.
3. Detailed explanations of specific algorithms should not be part of this collection.
  Link to online documentation and scientific publications instead.

## Project organization / management

The project is currently maintained and lead by the [benevolent dictator](http://oss-watch.ac.uk/resources/benevolentdictatorgovernancemodel) 
[@haesleinhuepf](https://github.com/haesleinhuepf) who is also open to sharing responsibilities. 
If you want to contribute or even become part of the decision making process, please get in touch. 
Everyone is welcome who supports the major aims listed above.

## How contributions become part of the collection

After you submitted a pull-request, it will be reviewed and checked if the conditions above are met. 
We may ask for minor changes and have a discussion about content. We aim at keeping this process short and not wasting anyone's time. 
In case your materials are merged, and your contribution is more than just minor corrections and additions, you will be listed under authors and copyright holders. 
If your affiliation / institution should also be mentioned there, please include this as suggestion in your pull request.
After your content is merged, it may be moved to other chapters at a later time. 
Depending on future content creators, content may be reshuffled, notebooks may be split and merged.
This is necessary to maintain the resource long-term.

## Copyright

All contents of this Jupyter book and the corresponding Github repository are licensed [CC-BY 4.0](https://creativecommons.org/licenses/by/4.0/) by the [authors and contributors](https://github.com/haesleinhuepf/xai/contributors), unless mentioned otherwise.
Please make sure your contribution can be shared under the same conditions.

## Changes to these conditions

These conditions may be changed by the maintainers any time. Nothing is nailed in stone. We have to write this to be on the safe side.
If you contributed to the repository earlier and later you are unhappy about your contribution for whatever reasons, 
please send a pull-request removing your contributions. We will accept this pull-request.
