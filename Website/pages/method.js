import Navbar from "../components/frame/Navbar.js";
import Footer from "../components/frame/Footer.js";
import Titlebar from "../components/frame/Titlebar.js";
import CodeSection from "../components/code/Section.js";

export default function Method() {
    const cs1 = `import os 
    
from astropy.io import fits
from matplotlib import pyplot as plt
import numpy as np
import lightkurve as lk
from astroquery.simbad import Simbad
import pandas as pd 
from numpy import genfromtxt
from sklearn.preprocessing import normalize
from labellines import labelLine, labelLines

from __future__ import absolute_import, division, print_function, unicode_literals
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import datasets, layers, models

from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score, mean_squared_error, mean_absolute_error`;
    const cs2 = `all_data = np.empty((1,243))
for dataset in ['Data_v4']:
  new_data = np.empty((1,244))
  for i in range(1610*2):
    try:
      new_data = np.concatenate((new_data,pd.read_csv('/Users/michaelsong/Documents/GitHub/starzam/'+dataset+'/'+str(i)+'.csv',delimiter=',').to_numpy()), axis=0)
    except:
      continue
    print("\r"+str(i),end="")
  new_data = new_data[1:].T[1:].T
  print(new_data.shape)
  all_data = np.concatenate((all_data,new_data),axis=0)
all_data = all_data[1:]
print(all_data.shape)`;
    const cs3 = `def extract_xy(all_data):
    all_x = all_data.T[7:243].T
    all_y = all_data.T[1:7].T
    teff_y = all_y.T[0].T
    return all_x,teff_y

all_x,teff_y = extract_xy(all_data)`;
    const cs4 = `def normalize_with_moments(X_train, axes=0, epsilon=1e-8,keep_dims=True):
    x = tf.convert_to_tensor(X_train)
    mean, variance = tf.nn.moments(x, axes=axes)
    x_normed = (x - mean) / tf.sqrt(variance + epsilon) # epsilon to avoid dividing by zero
    return x_normed

def normalize_x(x):
    x = x.T
    for i in range(len(x)):
        x[i] = x[i] / np.linalg.norm(x[i])
    return x.T`;

    const cs5 = `train_x,test_x,train_y,test_y=train_test_split(all_x, teff_y, test_size=0.20, random_state=42)
print(train_x.shape,test_x.shape,train_y.shape,test_y.shape)
train_x = np.asarray(train_x).astype('float32')
test_x = np.asarray(test_x).astype('float32')
train_y = np.asarray(train_y).astype('float32')
test_y = np.asarray(test_y).astype('float32')
print(train_x.shape,test_x.shape,train_y.shape,test_y.shape)`;

    const cs6 = `keras.backend.clear_session()

model = models.Sequential()
model.add(layers.Dense(1024, activation="relu", input_shape=((236,))))
model.add(layers.Dense(512, activation="relu"))
model.add(layers.Dense(256, activation="relu"))
model.add(layers.Dense(128, activation="relu"))
model.add(layers.Dense(64, activation="relu"))
model.add(layers.Dense(32, activation="relu"))
model.add(layers.Dense(1))
model.summary()
model.compile(optimizer='adam', loss='mse', metrics=['accuracy'])

monitor = keras.callbacks.EarlyStopping(monitor='val_loss', min_delta=1e-4, 
        patience=5, verbose=1, mode='auto',
        restore_best_weights=True)
`;

    const cs7 = `history = model.fit(train_x, train_y, epochs=1000,validation_data=(test_x, test_y),callbacks=[monitor], verbose=2)
model.save('/Users/michaelsong/Documents/GitHub/starzam/Models/m7.0')plt.plot(history.history['accuracy'])

# Plotting Model Accuracy over Epochs
plt.plot(history.history['val_accuracy'])
plt.title('Model Accuracy')
plt.ylabel('Accuracy')
plt.xlabel('Epoch')
plt.legend(['train', 'test'], loc='upper left')
plt.show()

# Plotting Model Loss over Epochs
plt.plot(history.history['loss'][10:])
plt.plot(history.history['val_loss'][10:])
plt.title('Model loss')
plt.ylabel('Loss')
plt.xlabel('Epoch')
plt.legend(['train', 'test'], loc='upper left')
plt.savefig('/Users/michaelsong/Documents/GitHub/starzam/Results/5.13_training.png')
plt.show()`;

    const cs8 = `pred_test_y = model.predict(test_x).reshape(-1)
pred_train_y = model.predict(train_x).reshape(-1)
print(pred_test_y.shape,pred_train_y.shape)`;

    const cs9 = `plt.rcParams['figure.dpi'] = 1000
plt.scatter(test_y[:1000],pred_test_y[:1000], c='blue', alpha=0.5,s=0.5)

bot = 4000
top = 6000

linex = np.linspace(bot-500, top+500)
liney = linex
lineytop = linex*1.06
lineybot = linex*0.94

plt.plot(linex, liney,c="green",label="±0")
plt.plot(linex, lineytop,c="orange",label="+200")
plt.plot(linex, lineybot,c="orange",label="-200")
labelLines(plt.gca().get_lines(), zorder=2.5)

plt.xlim(bot, top)
plt.ylim(bot, top)
plt.gca().set_aspect(2, adjustable='box')

plt.title('Sampled Prediction Data, 1000 Points')
plt.ylabel('Predicted Effective Temperature (°K)')
plt.xlabel('Measured Effective Temperature (°K)')

plt.savefig('/Users/michaelsong/Documents/GitHub/starzam/Results/metal.png')
plt.show()`;

    const cs10 = `errormargin = 200
test_count = 0
for i in range(len(normalize1D(test_y))):
    if test_y[i]-errormargin <= pred_test_y[i] <= test_y[i]+errormargin:
        test_count+= 1
train_count = 0
for i in range(len(normalize1D(train_y))):
    if train_y[i]-errormargin <= pred_train_y[i] <= train_y[i]+errormargin:
        train_count+= 1
        
print(test_count,len(test_y),train_count,len(train_y))
print(test_count/len(test_y),train_count/len(train_y))`;

    return (
        <div className="absolute w-[100%]">
            <Navbar />
            <Titlebar title="Method" />
            <CodeSection
                title="Import Packages"
                code={cs1}
                subtitle={
                    "Essential packages for data preprocessing, machine learning, graphing, and prediction evaluation."
                }
            />
            <div className="static bg-dark h-auto text-left py-[5vh] px-[5vw]">
                <div className="text-white font-title text-[3rem]">
                    Data Preprocessing
                </div>
            </div>
            <CodeSection
                title="Import Data"
                code={cs2}
                subtitle={
                    "Data is loaded post preprocessing. For specifics on this process, see the preprocessing page."
                }
            />
            <CodeSection title="Split X Y" code={cs3} />
            <CodeSection title="Data Normalization (Optional)" code={cs4} />
            <CodeSection
                title="Train Test Split"
                code={cs5}
                subtitle={
                    "80% : 20% is the field standard for splitting training and testing data."
                }
            />
            <CodeSection
                title="Initialize Tensorflow Model"
                code={cs6}
                subtitle={
                    "Early Stopping algorithm monitors decrease rate of testing loss and pauses training before overfitting occurs."
                }
            />
            <CodeSection title="Start Training" code={cs7} />
            <CodeSection title="Model Predictions" code={cs8} />
            <CodeSection title="Plotting Results" code={cs9} />
            <CodeSection title="Prediction Evaluation" code={cs10} />
            <Footer />
        </div>
    );
}
