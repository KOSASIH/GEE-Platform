from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.urls import reverse_lazy
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from .models import OtherModel
from .forms import OtherModelForm

class OtherModelListView(ListView):
    model = OtherModel
    template_name = 'other_app/other_model_list.html'
    context_object_name = 'other_models'

class OtherModelDetailView(DetailView):
    model = OtherModel
    template_name = 'other_app/other_model_detail.html'

@login_required
def other_model_create(request):
    if request.method == 'POST':
        form = OtherModelForm(request.POST)
        if form.is_valid():
            other_model = form.save(commit=False)
            other_model.user = request.user
            other_model.save()
            messages.success(request, 'Other model created successfully.')
            return redirect('other_app:other_model_list')
    else:
        form = OtherModelForm()
    return render(request, 'other_app/other_model_form.html', {'form': form})

@login_required
def other_model_update(request, pk):
    other_model = get_object_or_404(OtherModel, pk=pk)
    if request.method == 'POST':
        form = OtherModelForm(request.POST, instance=other_model)
        if form.is_valid():
            other_model = form.save()
            messages.success(request, 'Other model updated successfully.')
            return redirect('other_app:other_model_detail', pk=other_model.pk)
    else:
        form = OtherModelForm(instance=other_model)
    return render(request, 'other_app/other_model_form.html', {'form': form})

@login_required
def other_model_delete(request, pk):
    other_model = get_object_or_404(OtherModel, pk=pk)
    other_model.delete()
    messages.success(request, 'Other model deleted successfully.')
    return redirect('other_app:other_model_list')
