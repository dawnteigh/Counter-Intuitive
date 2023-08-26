class CountersController < ApplicationController
  before_action :set_counter, only: %i[ show edit update destroy ]

  # GET /counters or /counters.json
  def index
    render json: Counter.all, status: :ok
  end

  # GET /counters/1 or /counters/1.json
  def show
  end

  # GET /counters/new
  def new
    @counter = Counter.new
  end

  # GET /counters/1/edit
  def edit
  end

  # POST /counters or /counters.json
  def create
    counter = Counter.create!(counter_params)
    render json: counter, status: :created
  end

  # PATCH/PUT /counters/1 or /counters/1.json
  def update
    respond_to do |format|
      if @counter.update(counter_params)
        format.html { redirect_to counter_url(@counter), notice: "Counter was successfully updated." }
        format.json { render :show, status: :ok, location: @counter }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @counter.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /counters/1 or /counters/1.json
  def destroy
    @counter.destroy

    respond_to do |format|
      format.html { redirect_to counters_url, notice: "Counter was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_counter
      @counter = Counter.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def counter_params
      params.permit(:name, :style, :count)
    end
end
