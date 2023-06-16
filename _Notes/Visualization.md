---
title: Visualization
permalink: /notes/visualization
key: notes-visualization
layout: article
nav_key: Notes
sidebar:
  nav: Notes
license: false
aside:
  toc: true
show_edit_on_github: false
show_date: false
---

By the end of this lesson, you should be able to:
- Create **scatter** plot and statistical plots like box plot, histogram, and bar plot

Important words:
- scatter plot
- line plot
- pair plot
- bar plot
- box plot
- histogram

In this lesson, we will discuss common plots to visualize data using Matplotlib and Seaborn. Seaborn works on top of Matplotlib and you will need to import both packages in most of the cases. 

Reference:
- [Seaborn Tutorial](https://seaborn.pydata.org/tutorial.html)
- [Matplotlib Tutorial](https://matplotlib.org/stable/tutorials/index.html) 

First, let's import the necessary packages in this notebook.


```python
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np
```

In this notebook, we will still work with HDB resale price dataset to illustrate some visualization we can use. So let's import the dataset.


```python
file_url = 'https://www.dropbox.com/s/jz8ck0obu9u1rng/resale-flat-prices-based-on-registration-date-from-jan-2017-onwards.csv?raw=1'
df = pd.read_csv(file_url)
df
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>month</th>
      <th>town</th>
      <th>flat_type</th>
      <th>block</th>
      <th>street_name</th>
      <th>storey_range</th>
      <th>floor_area_sqm</th>
      <th>flat_model</th>
      <th>lease_commence_date</th>
      <th>remaining_lease</th>
      <th>resale_price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>2017-01</td>
      <td>ANG MO KIO</td>
      <td>2 ROOM</td>
      <td>406</td>
      <td>ANG MO KIO AVE 10</td>
      <td>10 TO 12</td>
      <td>44.0</td>
      <td>Improved</td>
      <td>1979</td>
      <td>61 years 04 months</td>
      <td>232000.0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2017-01</td>
      <td>ANG MO KIO</td>
      <td>3 ROOM</td>
      <td>108</td>
      <td>ANG MO KIO AVE 4</td>
      <td>01 TO 03</td>
      <td>67.0</td>
      <td>New Generation</td>
      <td>1978</td>
      <td>60 years 07 months</td>
      <td>250000.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>2017-01</td>
      <td>ANG MO KIO</td>
      <td>3 ROOM</td>
      <td>602</td>
      <td>ANG MO KIO AVE 5</td>
      <td>01 TO 03</td>
      <td>67.0</td>
      <td>New Generation</td>
      <td>1980</td>
      <td>62 years 05 months</td>
      <td>262000.0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>2017-01</td>
      <td>ANG MO KIO</td>
      <td>3 ROOM</td>
      <td>465</td>
      <td>ANG MO KIO AVE 10</td>
      <td>04 TO 06</td>
      <td>68.0</td>
      <td>New Generation</td>
      <td>1980</td>
      <td>62 years 01 month</td>
      <td>265000.0</td>
    </tr>
    <tr>
      <th>4</th>
      <td>2017-01</td>
      <td>ANG MO KIO</td>
      <td>3 ROOM</td>
      <td>601</td>
      <td>ANG MO KIO AVE 5</td>
      <td>01 TO 03</td>
      <td>67.0</td>
      <td>New Generation</td>
      <td>1980</td>
      <td>62 years 05 months</td>
      <td>265000.0</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>95853</th>
      <td>2021-04</td>
      <td>YISHUN</td>
      <td>EXECUTIVE</td>
      <td>326</td>
      <td>YISHUN RING RD</td>
      <td>10 TO 12</td>
      <td>146.0</td>
      <td>Maisonette</td>
      <td>1988</td>
      <td>66 years 04 months</td>
      <td>650000.0</td>
    </tr>
    <tr>
      <th>95854</th>
      <td>2021-04</td>
      <td>YISHUN</td>
      <td>EXECUTIVE</td>
      <td>360</td>
      <td>YISHUN RING RD</td>
      <td>04 TO 06</td>
      <td>146.0</td>
      <td>Maisonette</td>
      <td>1988</td>
      <td>66 years 04 months</td>
      <td>645000.0</td>
    </tr>
    <tr>
      <th>95855</th>
      <td>2021-04</td>
      <td>YISHUN</td>
      <td>EXECUTIVE</td>
      <td>326</td>
      <td>YISHUN RING RD</td>
      <td>10 TO 12</td>
      <td>146.0</td>
      <td>Maisonette</td>
      <td>1988</td>
      <td>66 years 04 months</td>
      <td>585000.0</td>
    </tr>
    <tr>
      <th>95856</th>
      <td>2021-04</td>
      <td>YISHUN</td>
      <td>EXECUTIVE</td>
      <td>355</td>
      <td>YISHUN RING RD</td>
      <td>10 TO 12</td>
      <td>146.0</td>
      <td>Maisonette</td>
      <td>1988</td>
      <td>66 years 08 months</td>
      <td>675000.0</td>
    </tr>
    <tr>
      <th>95857</th>
      <td>2021-04</td>
      <td>YISHUN</td>
      <td>EXECUTIVE</td>
      <td>277</td>
      <td>YISHUN ST 22</td>
      <td>04 TO 06</td>
      <td>146.0</td>
      <td>Maisonette</td>
      <td>1985</td>
      <td>63 years 05 months</td>
      <td>625000.0</td>
    </tr>
  </tbody>
</table>
<p>95858 rows × 11 columns</p>
</div>



## Categories of Plots

There are different categories of plot in Seaborn packages as shown in Seaborn documentation.

![](https://seaborn.pydata.org/_images/function_overview_8_0.png)

We can use either scatterplot or lineplot if we want to see relationship between two or more data. On the other hand, we have a few options to see distribution of data. The common one would be a histogram. The last category is categorical plot. We can use box plot, for example, to see the statistics of different categories. We will illustrate this more in the following sections.

## Histogram and Boxplot

One of the first thing we may want to do in understanding the data is to see its distribution and its descriptive statistics. To do this, we can use `histplot` to show the histogram of the data and `boxplot` to show the five-number summary of the data.

Let's see the resale price in the area around Tampines. First, let's check what are the town listed in this data set.


```python
np.unique(df['town'])
```




    array(['ANG MO KIO', 'BEDOK', 'BISHAN', 'BUKIT BATOK', 'BUKIT MERAH',
           'BUKIT PANJANG', 'BUKIT TIMAH', 'CENTRAL AREA', 'CHOA CHU KANG',
           'CLEMENTI', 'GEYLANG', 'HOUGANG', 'JURONG EAST', 'JURONG WEST',
           'KALLANG/WHAMPOA', 'MARINE PARADE', 'PASIR RIS', 'PUNGGOL',
           'QUEENSTOWN', 'SEMBAWANG', 'SENGKANG', 'SERANGOON', 'TAMPINES',
           'TOA PAYOH', 'WOODLANDS', 'YISHUN'], dtype=object)



Now, let's get the data for resale in Tampines only.


```python
df_tampines = df.loc[df['town'] == 'TAMPINES',:]
df_tampines
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>month</th>
      <th>town</th>
      <th>flat_type</th>
      <th>block</th>
      <th>street_name</th>
      <th>storey_range</th>
      <th>floor_area_sqm</th>
      <th>flat_model</th>
      <th>lease_commence_date</th>
      <th>remaining_lease</th>
      <th>resale_price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>917</th>
      <td>2017-01</td>
      <td>TAMPINES</td>
      <td>2 ROOM</td>
      <td>299A</td>
      <td>TAMPINES ST 22</td>
      <td>01 TO 03</td>
      <td>45.0</td>
      <td>Model A</td>
      <td>2012</td>
      <td>94 years 02 months</td>
      <td>250000.0</td>
    </tr>
    <tr>
      <th>918</th>
      <td>2017-01</td>
      <td>TAMPINES</td>
      <td>3 ROOM</td>
      <td>403</td>
      <td>TAMPINES ST 41</td>
      <td>01 TO 03</td>
      <td>60.0</td>
      <td>Improved</td>
      <td>1985</td>
      <td>67 years 09 months</td>
      <td>270000.0</td>
    </tr>
    <tr>
      <th>919</th>
      <td>2017-01</td>
      <td>TAMPINES</td>
      <td>3 ROOM</td>
      <td>802</td>
      <td>TAMPINES AVE 4</td>
      <td>04 TO 06</td>
      <td>68.0</td>
      <td>New Generation</td>
      <td>1984</td>
      <td>66 years 05 months</td>
      <td>295000.0</td>
    </tr>
    <tr>
      <th>920</th>
      <td>2017-01</td>
      <td>TAMPINES</td>
      <td>3 ROOM</td>
      <td>410</td>
      <td>TAMPINES ST 41</td>
      <td>01 TO 03</td>
      <td>69.0</td>
      <td>Improved</td>
      <td>1985</td>
      <td>67 years 08 months</td>
      <td>300000.0</td>
    </tr>
    <tr>
      <th>921</th>
      <td>2017-01</td>
      <td>TAMPINES</td>
      <td>3 ROOM</td>
      <td>462</td>
      <td>TAMPINES ST 44</td>
      <td>07 TO 09</td>
      <td>64.0</td>
      <td>Simplified</td>
      <td>1987</td>
      <td>69 years 06 months</td>
      <td>305000.0</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>95671</th>
      <td>2021-04</td>
      <td>TAMPINES</td>
      <td>EXECUTIVE</td>
      <td>495E</td>
      <td>TAMPINES ST 43</td>
      <td>04 TO 06</td>
      <td>147.0</td>
      <td>Apartment</td>
      <td>1994</td>
      <td>71 years 10 months</td>
      <td>630000.0</td>
    </tr>
    <tr>
      <th>95672</th>
      <td>2021-04</td>
      <td>TAMPINES</td>
      <td>EXECUTIVE</td>
      <td>477</td>
      <td>TAMPINES ST 43</td>
      <td>04 TO 06</td>
      <td>153.0</td>
      <td>Apartment</td>
      <td>1993</td>
      <td>71 years 04 months</td>
      <td>780000.0</td>
    </tr>
    <tr>
      <th>95673</th>
      <td>2021-04</td>
      <td>TAMPINES</td>
      <td>EXECUTIVE</td>
      <td>497J</td>
      <td>TAMPINES ST 45</td>
      <td>10 TO 12</td>
      <td>139.0</td>
      <td>Premium Apartment</td>
      <td>1996</td>
      <td>74 years 03 months</td>
      <td>695000.0</td>
    </tr>
    <tr>
      <th>95674</th>
      <td>2021-04</td>
      <td>TAMPINES</td>
      <td>EXECUTIVE</td>
      <td>857</td>
      <td>TAMPINES ST 83</td>
      <td>01 TO 03</td>
      <td>154.0</td>
      <td>Maisonette</td>
      <td>1988</td>
      <td>66 years</td>
      <td>735000.0</td>
    </tr>
    <tr>
      <th>95675</th>
      <td>2021-04</td>
      <td>TAMPINES</td>
      <td>MULTI-GENERATION</td>
      <td>454</td>
      <td>TAMPINES ST 42</td>
      <td>01 TO 03</td>
      <td>132.0</td>
      <td>Multi Generation</td>
      <td>1987</td>
      <td>65 years 04 months</td>
      <td>600000.0</td>
    </tr>
  </tbody>
</table>
<p>6392 rows × 11 columns</p>
</div>



Now, we can plot its resale price distribution using `histplot`.

See [documentation for histplot](https://seaborn.pydata.org/generated/seaborn.histplot.html)


```python
sns.histplot(x='resale_price', data=df_tampines)
```




    <AxesSubplot:xlabel='resale_price', ylabel='Count'>




![png](Visualization_files/Visualization_12_1.png)


In the above plot, we use `df_tampines` as our data source and use `resale_price` column as our x-axis. We can change the plot if we want to show it vertically.


```python
sns.set()
sns.histplot(y='resale_price', data=df_tampines)
```




    <AxesSubplot:xlabel='Count', ylabel='resale_price'>




![png](Visualization_files/Visualization_14_1.png)


**Notice that the background changes**. This is because we have called `sns.set()` which set Seaborn default setting instead of using Matplotlib's setting. For example, Matplotlib uses whitebackground and no grid. Seaborn by default displays some white grid on gray background.

By default, the `bins` argument is `auto` and Seaborn will try to calculate how many bins should be used. But we can specify this manually.


```python
sns.histplot(y='resale_price', data=df_tampines, bins=10)
```




    <AxesSubplot:xlabel='Count', ylabel='resale_price'>




![png](Visualization_files/Visualization_16_1.png)


We can see that majority of the sales of resale HDB in Tampines is priced at about \$400k to \$500k.

We can also use the `boxplot` to see some descriptive statistics of the data.

See [documentation on boxplot](https://seaborn.pydata.org/generated/seaborn.boxplot.html)


```python
sns.boxplot(x='resale_price', data=df_tampines)
```




    <AxesSubplot:xlabel='resale_price'>




![png](Visualization_files/Visualization_18_1.png)


See [Understanding Boxplot](https://towardsdatascience.com/understanding-boxplots-5e2df7bcbd51) for more detail. But the figure in that website summarizes the different information given in a boxplot.

![](https://miro.medium.com/max/700/1*2c21SkzJMf3frPXPAR_gZA.png)

The box gives you the 25th percentile and the 75th percentile boundary. The line inside the box gives you the median of the data. As we can see the median is about \$400k to \$500k. The difference between the 75th percentile (Q3) and the 25th percentile (Q1) is called the *Interquartile Range* (IQR). This definition is needed to understand what defines **outliers**. The minimum and the maximum here is not the minimum and the maximum value in the data, but rather is capped at

$$min = Q1 - 1.5\times IQR$$
$$max = Q3 + 1.5\times IQR$$

Anything below or above these "minimum" and "maximum" are considered an outlier in the box plot. In the figure above, for example, we have quite a number of outliers on the high end of the resale price.

## Modifying Labels and Titles

Since Seaborn is built on top of Matplotlib, we can use some of Matplotlib functions to change the figure's labels and title. 
For example, we can change the histogram's plot x and y labels and its titles using `plt.xlabel()`, `plt.ylabel()`, and `plt.title`. You can access these Matplotlib's functions by first storing the output of your Seaborn plot.


```python
myplot = sns.histplot(y='resale_price', data=df_tampines, bins=10)
```


![png](Visualization_files/Visualization_21_0.png)


Once you obtain the handle, you can call Matplotlib's function by adding the word `set_` in front of it. For example, if the Matplotlib's function is `plt.xlabel()`, you call it as `myplot.set_xlabel()`. See the code below.


```python
myplot = sns.histplot(y='resale_price', data=df_tampines, bins=10)
myplot.set_xlabel('Count', fontsize=16)
myplot.set_ylabel('Resale Price', fontsize=16)
myplot.set_title('HDB Resale Price in Tampines', fontsize=16)
```




    Text(0.5, 1.0, 'HDB Resale Price in Tampines')




![png](Visualization_files/Visualization_23_1.png)


Notice now that the plot has a title and both the x and y label has changed. 

The above plot will be much easier if we plots in thousands of dollars. So let's create a new column of resale price in \$1000.


```python
df_tampines['resale_price_1000'] = df_tampines['resale_price'].apply(lambda price: price/1000)
df_tampines['resale_price_1000'].describe()
```

    /var/folders/9l/s5tr888d1yldwlfg3_yyk7380000gq/T/ipykernel_13126/1487284426.py:1: SettingWithCopyWarning: 
    A value is trying to be set on a copy of a slice from a DataFrame.
    Try using .loc[row_indexer,col_indexer] = value instead
    
    See the caveats in the documentation: https://pandas.pydata.org/pandas-docs/stable/user_guide/indexing.html#returning-a-view-versus-a-copy
      df_tampines['resale_price_1000'] = df_tampines['resale_price'].apply(lambda price: price/1000)





    count    6392.000000
    mean      479.670371
    std       125.569977
    min       238.000000
    25%       390.000000
    50%       455.000000
    75%       550.000000
    max       990.000000
    Name: resale_price_1000, dtype: float64



Now, let's plot it one more time.


```python
myplot = sns.histplot(y='resale_price_1000', data=df_tampines, bins=10)
myplot.set_xlabel('Count', fontsize=16)
myplot.set_ylabel('Resale Price in $1000', fontsize=16)
myplot.set_title('HDB Resale Price in Tampines', fontsize=16)
```




    Text(0.5, 1.0, 'HDB Resale Price in Tampines')




![png](Visualization_files/Visualization_27_1.png)


## Using Hue

Seaborn make it easy to plot the same data and colour those data depending on another data. For example, we can see the distribution of the resale price according to the room number or the storey range. Seaborn has an argument called `hue` to specify which data column you want to use to colour this.


```python
myplot = sns.histplot(y='resale_price_1000', hue='flat_type', data=df_tampines, bins=10)
myplot.set_xlabel('Count', fontsize=16)
myplot.set_ylabel('Resale Price in $1000', fontsize=16)
myplot.set_title('HDB Resale Price in Tampines', fontsize=16)
```




    Text(0.5, 1.0, 'HDB Resale Price in Tampines')




![png](Visualization_files/Visualization_29_1.png)


So we can see from the distribution that 4-room flats in Tampines contributes roughly the largest sales. We can also see that 4-room flat resale price is around the median of the all the resale flats in this area. 


```python
myplot = sns.histplot(y='resale_price_1000', hue='storey_range', data=df_tampines, bins=10)
myplot.set_xlabel('Count', fontsize=16)
myplot.set_ylabel('Resale Price in $1000', fontsize=16)
myplot.set_title('HDB Resale Price in Tampines', fontsize=16)
```




    Text(0.5, 1.0, 'HDB Resale Price in Tampines')




![png](Visualization_files/Visualization_31_1.png)


The above colouring is not so obvious because they are on top of one another, one way is to change the settings in such a way that it is stacked. We can do this by setting the `multiple` argument for the case when there are multiple data in the same area.


```python
myplot = sns.histplot(y='resale_price_1000', hue='storey_range', 
                      multiple='stack',
                      data=df_tampines, bins=10)
myplot.set_xlabel('Count', fontsize=16)
myplot.set_ylabel('Resale Price in $1000', fontsize=16)
myplot.set_title('HDB Resale Price in Tampines', fontsize=16)
```




    Text(0.5, 1.0, 'HDB Resale Price in Tampines')




![png](Visualization_files/Visualization_33_1.png)


## Scatter Plot and Line Plot

We use scatter plot and line plot to visualize relationship between two or more data. For example, we can plot the floor area and resale price to see if there is any relationship.


```python
myplot = sns.scatterplot(x='floor_area_sqm', y='resale_price_1000', data=df_tampines)
myplot.set_xlabel('Floor Area ($m^2$)')
myplot.set_ylabel('Resale Price in $1000')
```




    Text(0, 0.5, 'Resale Price in $1000')




![png](Visualization_files/Visualization_35_1.png)


As we can see from the plot above, that the price tend to increase with the increase in floor area. You can again use the `hue` argument to see any category in the plot.


```python
myplot = sns.scatterplot(x='floor_area_sqm', y='resale_price_1000', 
                         hue='flat_type',
                         data=df_tampines)
myplot.set_xlabel('Floor Area ($m^2$)')
myplot.set_ylabel('Resale Price in $1000')
```




    Text(0, 0.5, 'Resale Price in $1000')




![png](Visualization_files/Visualization_37_1.png)


We can see that flat type in a way also has relationship with the floor area. 

## Pair Plot

One useful plot is called Pair Plot in Seaborn where it plots the relationship on multiple data columns. 


```python
myplot = sns.pairplot(data=df_tampines)
```


![png](Visualization_files/Visualization_40_0.png)


The above plots immediately plot different scatter plots and histogram in a matrix form. The diagonal of the plot shows the histogram of that column data. The rest of the cell shows you the scatter plot of two columns in the data frame. From these, we can quickly see the relationship between different columns in the data frame.
