class Api::ProfilesController < ApplicationController

  def update
    
  end

  private
  def image_params
    params.require(:image).permit(:url)
  end
end
