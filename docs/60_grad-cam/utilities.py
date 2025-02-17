def visualize_image_list(images, titles=None):
    image = images[0]
    
    # show feature images
    import matplotlib.pyplot as plt
    fig, axes = plt.subplots(1, len(images), figsize=(10, 10))
    
    for i in range(len(images)):
        # reshape(image.shape) is the opposite of ravel() here. We just need it for visualization.
        axes[i].imshow(images[i].reshape(image.shape), cmap=plt.cm.gray)
        axes[i].set_axis_off()
        if titles is not None:
            axes[i].set_title(titles[i])