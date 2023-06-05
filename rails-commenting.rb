# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)Defines a class that can inherit and utilize the methods and behavior defined in the ApplicationController class(parent)
class BlogPostsController < ApplicationController
  def index
    # ---2)assign an instance variable to be used to retireve all blog posts from the database table.
    @posts = BlogPost.all
  end

  # ---3) Create the "show" method within the BlogPostsController for purposes of displaying a specific blog post.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) Create the "new" method for purposes of displaying a form to create a new blog post
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) Create a new instance of the BlogPost model with the specified parameters and save it to the database.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) Search for a blog post with the specified id in the database.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) Update the values in a blog post that match the specified id in the database.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) After destroying a post redirect users to the index page of the blog posts.
      redirect_to blog_posts_path
    end
  end

  # ---9) Declare a private method to be used within this class.
  private
  def blog_post_params
    # ---10) Specify only the parameters that are capable of being modified (in this case title and content).
    params.require(:blog_post).permit(:title, :content)
  end
end
