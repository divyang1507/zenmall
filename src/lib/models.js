import mongoose from "mongoose";
import slugify from "slugify";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // lowercase: true,
        // trim: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        // trim: true
    },
    lastName: {
        type: String,
        // trim: true
    },
    roles: [{
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }],
    isActive: {
        type: Boolean,
        default: true
    },
    profilePictureUrl: {
        type: String,
        default: ''
    },
    lastLogin: {
        type: Date
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });


const productSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true,
        trim: true,
      },
      slug: {
        type: String,
        required: true,
        trim: true,
      },
      description: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
        default: 0,
      },
      categories: [
        {
          type: String,
          required: true,
        },
      ],
      imageUrls: [
        {
          type: String,
        },
      ],
      brand: {
        type: String,
        required: false,
      },
      stock: {
        type: Number,
        required: true,
        default: 0,
      },
   
      rating: {
        type: Number,
        default: 0,
      },
      numReviews: {
        type: Number,
        default: 0,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      updatedAt: {
        type: Date,
        default: Date.now,
      },
    },
    { timestamps: true }
  );
  
  // Middleware to create a slug from the name before saving it to the database
productSchema.pre('save', function(next) {
    if (!this.isModified('name') && this.slug) {
        next();
        return;
    }
    this.slug = slugify(this.name, {
        lower: true,      // convert to lower case
        strict: true,     // strip special characters except replacement
        replacement: '-', // replace spaces with replacement character, defaults to `-`
    });
    next();
});

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
export const Product =mongoose.models?.Product || mongoose.model("Product", productSchema);
